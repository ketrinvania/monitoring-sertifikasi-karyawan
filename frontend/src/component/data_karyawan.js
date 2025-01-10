import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]); // State untuk menyimpan data dari API
  const [loading, setLoading] = useState(true); // State untuk loading indikator

  useEffect(() => {
    // Fungsi untuk mengambil data dari API
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/');
        setEmployees(response.data); // Simpan data ke state
      } catch (error) {
        console.error('Error fetching employees:', error.message);
      } finally {
        setLoading(false); // Hentikan loading indikator
      }
    };

    fetchEmployees();
  }, []);

  const handleAddEmployee = () => {
    navigate('/AddEmployee');
  };

  return (
    <div>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h1 style={styles.title}>Employee</h1>
        {/* Add Employee Button */}
        <div style={styles.addButtonContainer}>
          <button style={styles.addButton} onClick={handleAddEmployee}>Add Employee</button>
        </div>
      </div>

      {/* Main content */}
      <div style={styles.container}>
        {loading ? ( // Tampilkan indikator loading jika data belum selesai diambil
          <div>Loading...</div>
        ) : employees.length > 0 ? (
          employees.map((employee) => (
            <div key={employee.id} style={styles.employeeCard}>
              <div style={styles.icon}><FaUserCircle size={48} /></div>
              <div style={styles.name}>{employee.nama_karyawan}</div>
              <div style={styles.role}>{employee.posisi}</div>
            </div>
          ))
        ) : (
          <div>No employees found</div> // Pesan jika data kosong
        )}
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
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
    color: '#333',
  },
  addButtonContainer: {
    marginTop: '130px',
    marginLeft: '-110px',
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  addButton: {
    padding: '8px 16px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  container: {
    display: 'inline-flex',
    justifyContent: 'flex-start', // Align items to the left
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    marginTop: '200px',
    marginLeft: '20px',
  },
  employeeCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.3s, box-shadow 0.3s',
    width: '220px',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: '48px',
    marginBottom: '15px',
    color: '#4CAF50',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333',
  },
  role: {
    fontSize: '14px',
    color: '#777',
  },
};

export default EmployeeList;
