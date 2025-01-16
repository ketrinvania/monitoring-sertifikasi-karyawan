import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar'; 
import Login from './component/login'; 
import Dashboard from './component/dashboard'; 
<<<<<<< HEAD
import Department from './component/DepartementList'; 
import Certificate from './component/certificate'; // Import komponen Certificate
=======
import Department from './component/DepartmentList'; 
import Training from './component/training';
>>>>>>> 809b4eadee09f6f61e11609aa44c243deda1760a

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
<<<<<<< HEAD
          path="/certificate"
=======
          path="/training"
>>>>>>> 809b4eadee09f6f61e11609aa44c243deda1760a
          element={
            <div style={styles.app}>
              <Sidebar />
              <div style={styles.content}>
<<<<<<< HEAD
                <Certificate />
              </div>
            </div>
          }
        /> {/* Halaman Certificate dengan Sidebar */}
=======
                <Training />
              </div>
            </div>
          }
        /> {/* Halaman Training dengan Sidebar */}
>>>>>>> 809b4eadee09f6f61e11609aa44c243deda1760a
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
    marginLeft: '70px', 
  },
};

export default App;
