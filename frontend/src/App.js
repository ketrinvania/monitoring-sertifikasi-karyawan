import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar'; 
import Login from './component/login'; 
import Dashboard from './component/dashboard'; 
import Department from './component/DepartmentList'; 
import Certificate from './component/certificate'; // Import komponen Certificate
import Training from './component/training'; // Import komponen Training

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Halaman Login */}
        
        {/* Halaman Dashboard dengan Sidebar */}
        <Route
          path="/dashboard"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />
        
        {/* Halaman Department dengan Sidebar */}
        <Route
          path="/department"
          element={
            <AppLayout>
              <Department />
            </AppLayout>
          }
        />
        
        {/* Halaman Certificate dengan Sidebar */}
        <Route
          path="/certificate"
          element={
            <AppLayout>
              <Certificate />
            </AppLayout>
          }
        />
        
        {/* Halaman Training dengan Sidebar */}
        <Route
          path="/training"
          element={
            <AppLayout>
              <Training />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
};

// Komponen pembungkus dengan Sidebar
const AppLayout = ({ children }) => {
  return (
    <div style={styles.app}>
      <Sidebar />
      <div style={styles.content}>
        {children}
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
    marginLeft: '70px', 
  },
};

export default App;
