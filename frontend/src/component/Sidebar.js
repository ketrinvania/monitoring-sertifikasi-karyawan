import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaHome, FaUserAlt, FaSignOutAlt } from 'react-icons/fa'; // React Icons

const Sidebar = () => {
  const navigate = useNavigate(); 

  const handleNavigate = (path) => {
    navigate(path); 
  };

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.iconContainer}>
        <FaUserCircle size={50} style={styles.icon} />
        <span style={styles.label}>Admin</span>
      </div>
      <div style={styles.menu}>
        <div 
          style={styles.menuItem} 
          onClick={() => handleNavigate('/dashboard')} 
        >
          <FaHome size={35} style={styles.icon} />
          <span style={styles.label}>Home</span>
        </div>
        <div style={styles.menuItem}>
          <FaUserAlt size={35} style={styles.icon} />
          <span style={styles.label}>User</span>
        </div>
      </div>
      <div style={styles.footer} onClick={handleLogout}>
        <FaSignOutAlt style={styles.icon} />
        <span style={styles.label}>Logout</span>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#E6F6D7',
    height: '100vh',
    width: '80px',
    padding: '10px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  },
  iconContainer: {
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  menu: {
    flex: 1,
    width: '100%',
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px 0',
    cursor: 'pointer',
  },
  footer: {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
  },
  icon: {
    color: '#000',
    marginBottom: '5px',
  },
  label: {
    fontSize: '12px',
    color: '#000',
  },
};

export default Sidebar;
