import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar'; 
import Login from './component/login'; 
import Dashboard from './component/dashboard'; 
import Department from './component/DepartementList'; 
import EmployeeList from './component/data_karyawan';
import AddEmployee from './component/add_dataemployee';

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
        <Route
          path="/employee"
          element={
            <div style={styles.app}>
              <Sidebar />
              <div style={styles.content}>
                <EmployeeList />
              </div>
            </div>
          }
        /> {/* Halaman Employee dengan Sidebar */}
         <Route
          path="/AddEmployee"
          element={
            <div style={styles.app}>
              <Sidebar />
              <div style={styles.content}>
                <AddEmployee/>
              </div>  
            </div>
          }
        /> {/* Halaman Add-Employee dengan Sidebar */}
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
