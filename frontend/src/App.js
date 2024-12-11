import React from 'react';
import Sidebar from './component/Sidebar'; 
import DepartmentList from './component/DepartementList'; 

const App = () => {
  return (
    <div style={styles.app}>
      <Sidebar />
      <div style={styles.content}>
        <h1 style={styles.title}>Department List</h1>
        <DepartmentList />
      </div>
    </div>
  );
};

const styles = {
  app: {
    display: 'flex',
    backgroundColor: 'white', 
    minHeight: '100vh', 
    color: 'black', 
  },
  content: {
    flex: 1,
  },
  title: {
    padding: '20px',
    fontSize: '27px',
    fontWeight: 'bold',
  },
};

export default App;
