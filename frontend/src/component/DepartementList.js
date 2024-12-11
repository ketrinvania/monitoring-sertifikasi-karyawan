import React from 'react';
import { FaDesktop, FaCalculator, FaChartLine, FaUserTie } from 'react-icons/fa'; // React Icons

const departments = [
  { id: 1, name: 'IT Department', icon: <FaDesktop size={50} /> },
  { id: 2, name: 'Finance Department', icon: <FaCalculator size={50} /> },
  { id: 3, name: 'Marketing Department', icon: <FaChartLine size={50} /> },
  { id: 4, name: 'HR Department', icon: <FaUserTie size={50} /> },
];

const DepartmentList = () => {
  return (
    <div style={styles.container}>
      {departments.map((department) => (
        <div key={department.id} style={styles.card}>
          <div style={styles.icon}>{department.icon}</div>
          <div style={styles.name}>{department.name}</div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '20px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '250px',
    height: '250px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
  cardHover: {
    transform: 'scale(1.05)',
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
