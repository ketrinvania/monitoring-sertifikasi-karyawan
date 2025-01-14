import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { departments } from './DepartmentList.js'; 

const Training = () => {
    const [courses, setCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ department: '', training: '', date: '', mentor: '' });
    const [editingCourse, setEditingCourse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/training');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        fetchCourses();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddCourse = () => {
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/training/${id}`);
            setCourses((prev) => prev.filter((course) => course.id !== id));
        } catch (error) {
            console.error('Error deleting data:', error.message);
        }
    };

    const handleEdit = (course) => {
        setFormData({
            department: course.department,
            training: course.training,
            date: course.date,
            mentor: course.mentor,
        });
        setEditingCourse(course);
        setShowModal(true);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (editingCourse) {
                await axios.put(`http://localhost:5000/training/${editingCourse.id}`, formData);
                setCourses((prev) =>
                    prev.map((course) =>
                        course.id === editingCourse.id ? { ...course, ...formData } : course
                    )
                );
            } else {
                const response = await axios.post('http://localhost:5000/training', formData);
                setCourses((prev) => [...prev, response.data]);
            }

            setFormData({ department: '', training: '', date: '', mentor: '' });
            setEditingCourse(null);
            setShowModal(false);
        } catch (error) {
            console.error('Error saving data:', error.message);
            setError('Failed to save data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.sidebar}>
                <h1 style={styles.title}>Course Training</h1>
            </div>
            <div style={styles.content}>
                <button style={styles.addButton} onClick={handleAddCourse} disabled={loading}>
                    {loading ? 'Loading...' : '+ Add Course'}
                </button>
                {error && <p style={styles.errorMessage}>{error}</p>}
                <h2 style={styles.tableTitle}>Course List</h2>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.tableHeader}>No</th>
                            <th style={styles.tableHeader}>Department</th>
                            <th style={styles.tableHeader}>Training</th>
                            <th style={styles.tableHeader}>Date</th>
                            <th style={styles.tableHeader}>Mentor</th>
                            <th style={styles.tableHeader}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{course.department}</td>
                                <td>{course.training}</td>
                                <td>{course.date}</td>
                                <td>{course.mentor}</td>
                                <td>
                                    <button
                                        style={styles.actionButton}
                                        onClick={() => handleEdit(course)}
                                    >
                                        ✏️
                                    </button>
                                    <button
                                        style={styles.actionButton}
                                        onClick={() => handleDelete(course.id)}
                                    >
                                        🗑️
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {showModal && (
                    <div style={styles.modalOverlay}>
                        <div style={styles.modal}>
                            <form onSubmit={handleFormSubmit} style={styles.form}>
                                <div style={styles.formGroup}>
                                    <label>Department:</label>
                                    <select
                                        name="department"
                                        value={formData.department}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="" disabled>
                                            Select a department
                                        </option>
                                        {departments.map((department) => (
                                            <option key={department.id} value={department.name}>
                                                {department.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div style={styles.formGroup}>
                                    <label>Training:</label>
                                    <input
                                        type="text"
                                        name="training"
                                        value={formData.training}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div style={styles.formGroup}>
                                    <label>Date:</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div style={styles.formGroup}>
                                    <label>Mentor:</label>
                                    <input
                                        type="text"
                                        name="mentor"
                                        value={formData.mentor}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <button type="submit" style={styles.addButton}>
                                    Save Course
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    style={styles.cancelButton}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
    },
    sidebar: {
        position: 'fixed',
        top: 0,
        left: 81,
        width: '100%',
        height: '70px',
        backgroundColor: '#E6F6D7',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 10,
    },
    title: {
        marginLeft: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    content: {
        marginTop: '100px',
        padding: '20px',
        marginLeft: '20px',
        flex: 1,
        backgroundColor: '#ffffff',
    },
    addButton: {
        backgroundColor: '#C5E1A5',
        color: '#333',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '20px',
        marginLeft: '0px',
        fontWeight: 'bold',
    },
    tableTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '20px 0 10px 0',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '10px',
    },
    tableHeader: {
        backgroundColor: '#E6F6D7',
        color: '#333',
        padding: '10px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
    },
    actionButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '0 5px',
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modal: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        width: '400px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    errorMessage: {
        color: 'red',
        marginBottom: '15px',
    },
    cancelButton: {
        backgroundColor: '#F44336',
        color: '#fff',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
};

export default Training;
