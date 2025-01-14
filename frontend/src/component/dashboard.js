import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
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
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '30px', 
      justifyContent: 'start', 
      alignItems: 'start', 
      marginTop: '100px', 
      padding: '20px',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'transform 0.2s',
      width: '175px',
      height: '175px',
    },
    icon: {
      fontSize: '40px',
      marginBottom: '10px',
    },
    cardText: {
      fontWeight: 'bold',
      fontSize: '16px',
    },
    title: {
      marginLeft: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    contentWrapper: {
      marginTop: '60px',
    },
  };

  return (
    <div>
      <div style={styles.sidebar}>
        <h1 style={styles.title}>Dashboard</h1>
      </div>
      <div style={styles.contentWrapper}>
        <div style={styles.container}>
          <div 
            style={styles.card} 
            onClick={() => handleNavigate('/employee-data')}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={styles.icon}>👨‍💼</div>
            <div style={styles.cardText}>Employee Data</div>
          </div>
          <div 
            style={styles.card} 
            onClick={() => handleNavigate('/department')}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={styles.icon}>🏢</div>
            <div style={styles.cardText}>Department</div>
          </div>
          <div 
            style={styles.card} 
            onClick={() => handleNavigate('/training')}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={styles.icon}>🎓</div>
            <div style={styles.cardText}>Course</div>
          </div>
          <div 
            style={styles.card} 
            onClick={() => handleNavigate('/report')}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={styles.icon}>📑</div>
            <div style={styles.cardText}>Report</div>
          </div>
          <div 
            style={styles.card} 
            onClick={() => handleNavigate('/certificate')}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={styles.icon}>🎓</div>
            <div style={styles.cardText}>Certificate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
