import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate('/dashboard'); 
    } else {
      alert("Email dan password harus diisi!");
    }
  };

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#E6F6D7',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    },
    loginWrapper: {
      textAlign: 'center',
      width: '100%',
      maxWidth: '100%',
    },
    loginHeader: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#000000',
      margin: 0,
      width: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'center',
    },
    loginContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#E6F6D7',
      borderRadius: '10px',
      width: '100%',
    },
    inputContainer: {
      width: '30%',
      marginBottom: '15px',
      textAlign: 'left',
    },
    inputLabel: {
      display: 'block',
      marginLeft: '0px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '12px',
      marginTop: '0px',
      border: '1px solid #ccc',
      borderRadius: '10px',
    },
    buttonContainer: {
      width: '15%',
    },
    button: {
      padding: '10px',
      backgroundColor: '#708E99',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      width: '100%',
      fontWeight: 'bold',
    },
    forgotPassword: {
      marginTop: '0px',
    },
    forgotPasswordLink: {
      textDecoration: 'none',
      color: '#000000',
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.loginWrapper}>
        <div style={styles.loginHeader}>
          <h1>Website Monitoring dan Sertifikasi Karyawan</h1>
        </div>
        <div style={styles.loginContainer}>
          <div style={styles.inputContainer}>
            <label htmlFor="email" style={styles.inputLabel}>Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Masukkan email" 
              style={styles.input} 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div style={styles.inputContainer}>
            <label htmlFor="password" style={styles.inputLabel}>Kata Sandi</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Masukkan kata sandi" 
              style={styles.input} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div style={styles.buttonContainer}>
            <button style={styles.button} onClick={handleLogin}>Masuk</button>
          </div>
          <div style={styles.forgotPassword}>
            <a href="#" style={styles.forgotPasswordLink}>Lupa Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
