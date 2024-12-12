import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar'; 
import Login from './component/login'; 
import Dashboard from './component/dashboard'; 
import Department from './component/DepartementList'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Halaman Login */}
        <Route
          path="/dashboard"
          element={
            <div style={styles.app}>
              <Sidebar />
              <div style={styles.content}>
                <Dashboard />
              </div>
            </div>
          }
        /> {/* Halaman Dashboard dengan Sidebar */}
        <Route
          path="/department"
          element={
            <div style={styles.app}>
              <Sidebar />
              <div style={styles.content}>
                <Department />
              </div>
            </div>
          }
        /> {/* Halaman Department dengan Sidebar */}
      </Routes>
    </Router>
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
    marginLeft: '250px', 
  },
};

export default App;
