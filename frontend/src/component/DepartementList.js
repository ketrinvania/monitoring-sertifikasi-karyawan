import React from 'react';
import { FaDesktop, FaCalculator, FaChartLine, FaUserTie } from 'react-icons/fa'; 

const departments = [
  { id: 1, name: 'IT Department', icon: <FaDesktop size={50} /> },
  { id: 2, name: 'Finance Department', icon: <FaCalculator size={50} /> },
  { id: 3, name: 'Marketing Department', icon: <FaChartLine size={50} /> },
  { id: 4, name: 'HR Department', icon: <FaUserTie size={50} /> },
];

const DepartmentList = () => {
  return (
    <div>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h1 style={styles.title}>Departement</h1>
      </div>

      {/* Main content */}
      <div style={styles.container}>
        {departments.map((department) => (
          <div key={department.id} style={styles.card}>
            <div style={styles.icon}>{department.icon}</div>
            <div style={styles.name}>{department.name}</div>
          </div>
        ))}
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
    marginLeft: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '0px',
    marginTop: '100px', 
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '200px',
    height: '200px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
  icon: {
    marginBottom: '20px',
    color: '#7b9c70',
  },
  name: {
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '15px',
    color: '#000',
  },
};

export default DepartmentList;
