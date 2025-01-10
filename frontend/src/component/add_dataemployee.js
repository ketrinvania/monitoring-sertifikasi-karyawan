import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const AddEmployee = () => {
  const navigate = useNavigate();

  // State to manage form inputs
  const [employeeData, setEmployeeData] = useState({
    id: '',
    name: '',
    email:'',
    status: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000', employeeData);
  
      if (response.status === 200) {
        console.log('User added successfully:', response.data);
        alert('Employee added successfully!');
        navigate('/employee');
      } else {
        console.error('Error adding user:', response.status);
        alert('Failed to add employee. Please try again.');
      }
    } catch (error) {
      console.error('Error connecting to the server:', error.message);
      alert('Error connecting to the server. Please try again later.');
    }
  };
  

  return (
    <div>
      <div style={styles.sidebar}>
        <h1 style={styles.sidebarTitle}>Add Employee</h1>
      </div>

      <div style={styles.container}>
        <h2 style={styles.title}>Add Employee</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="id">Employee ID</label>
            <input
              type="text"
              id="id"
              name="id"
              value={employeeData.id}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={employeeData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={employeeData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="status">Status</label>
            <input
              type="text"
              id="status"
              name="status"
              value={employeeData.status}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              name="role"
              value={employeeData.role}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.checkboxLabel} htmlFor="active">Active</label>
            <input
              type="checkbox"
              id="active"
              name="active"
              checked={employeeData.active}
              onChange={handleChange}
              style={styles.checkbox}
            />
          </div>

          <div style={styles.buttconContainer}>
            <button type="submit" style={styles.submitButton}>Add Employee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
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
    sidebarTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: 0,
      padding: 0,   
      color: '#333',
    },
    container: {
      padding: '20px',
      marginTop: '200px',  // Adjusted marginTop for better positioning
      maxWidth: '480px',   // Reduced the maxWidth for a better form appearance
      margin: '0 auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',  // Added gap between form groups for better spacing
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '8px',
    },
    input: {
      width: '100%',
      padding: '12px',
      fontSize: '14px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    inputFocus: {
      borderColor: '#4CAF50',  // Added a focus effect
    },
    checkboxLabel: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '8px',
    },
    checkbox: {
      marginTop: '5px',
      cursor: 'pointer',
    },
    buttonContainer: {
      textAlign: 'center',
    },
    submitButton: {
      padding: '12px 20px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      fontSize: '16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.3s',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    submitButtonHover: {
      backgroundColor: '#45a049',
      transform: 'scale(1.05)',
    },
  };

export default AddEmployee;
