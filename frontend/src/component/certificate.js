import React, { useState } from 'react';

const Certificate = () => {
  const [certificates, setCertificates] = useState([]); // Menyimpan data sertifikat
  const [isAdding, setIsAdding] = useState(false); // Kondisi untuk form input
  const [formData, setFormData] = useState({
    training: '',
    date: '',
    expiration: '',
  });
  const [isEditing, setIsEditing] = useState(null); // Untuk mengetahui sertifikat yang sedang diedit

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCertificate = () => {
    setIsAdding(true);
  };

  const handleSave = () => {
    if (formData.training && formData.date && formData.expiration) {
      setCertificates((prev) => [...prev, formData]);
      setFormData({ training: '', date: '', expiration: '' });
      setIsAdding(false);
    } else {
      alert('Please fill all fields!');
    }
  };

  const handleCancel = () => {
    setIsAdding(false);
    setFormData({ training: '', date: '', expiration: '' });
  };

  const handleDelete = (index) => {
    setCertificates(certificates.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setIsEditing(index);
    setFormData(certificates[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedCertificates = [...certificates];
    updatedCertificates[index] = formData;
    setCertificates(updatedCertificates);
    setIsEditing(null);
    setFormData({ training: '', date: '', expiration: '' });
  };

  const handleDownload = (certificate) => {
    const dataStr = JSON.stringify(certificate, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${certificate.training}-certificate.json`;
    link.click();
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      height: '100vh',
      padding: '20px',
      backgroundColor: '#F9FFF6',
    },
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
    addButton: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#E6F6D7',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      color: '#000',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      marginTop: '30px', // Menurunkan jarak button
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#fff',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginTop: '20px', // Menambah jarak antara tabel dan elemen lainnya
    },
    tableHeader: {
      backgroundColor: '#E6F6D7',
      fontWeight: 'bold',
    },
    tableRow: {
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
    },
    tableCell: {
      padding: '10px',
      textAlign: 'left',
    },
    actionIcon: {
      cursor: 'pointer',
      marginRight: '10px',
    },
    input: {
      width: '100%',
      padding: '5px',
      border: '1px solid #ccc',
      borderRadius: '3px',
      marginBottom: '10px', // Menambahkan jarak antar input
    },
    saveButton: {
      padding: '5px 10px',
      backgroundColor: '#198754',
      color: '#fff',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
      marginRight: '5px',
    },
    cancelButton: {
      padding: '5px 10px',
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h1 style={styles.title}>Certificate</h1>
      </div>
      <h1 style={styles.title}>Certificate</h1>
      <button style={styles.addButton} onClick={handleAddCertificate}>
        <span style={{ marginRight: '10px', fontSize: '20px' }}>➕</span> Add Certificate
      </button>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.tableCell}>Training</th>
            <th style={styles.tableCell}>Date</th>
            <th style={styles.tableCell}>Expiration</th>
            <th style={styles.tableCell}>Action</th>
          </tr>
        </thead>
        <tbody>
          {certificates.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ ...styles.tableCell, fontStyle: 'italic' }}>
                No certificates added yet.
              </td>
            </tr>
          ) : (
            certificates.map((certificate, index) => (
              <tr key={index} style={styles.tableRow}>
                <td style={styles.tableCell}>
                  {isEditing === index ? (
                    <input
                      type="text"
                      name="training"
                      value={formData.training}
                      onChange={handleInputChange}
                      style={styles.input}
                    />
                  ) : (
                    certificate.training || '-'
                  )}
                </td>
                <td style={styles.tableCell}>
                  {isEditing === index ? (
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      style={styles.input}
                    />
                  ) : (
                    certificate.date || '-'
                  )}
                </td>
                <td style={styles.tableCell}>
                  {isEditing === index ? (
                    <input
                      type="date"
                      name="expiration"
                      value={formData.expiration}
                      onChange={handleInputChange}
                      style={styles.input}
                    />
                  ) : (
                    certificate.expiration || '-'
                  )}
                </td>
                <td style={styles.tableCell}>
                  {isEditing === index ? (
                    <>
                      <button style={styles.saveButton} onClick={() => handleSaveEdit(index)}>
                        Save
                      </button>
                      <button style={styles.cancelButton} onClick={handleCancel}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <span style={styles.actionIcon} onClick={() => handleDelete(index)}>
                        🗑️
                      </span>
                      <span style={styles.actionIcon} onClick={() => handleEdit(index)}>
                        ✏️
                      </span>
                      <span style={styles.actionIcon} onClick={() => handleDownload(certificate)}>
                        ⬇️
                      </span>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
          {isAdding && (
            <tr>
              <td style={styles.tableCell}>
                <input
                  type="text"
                  name="training"
                  value={formData.training}
                  onChange={handleInputChange}
                  placeholder="Training Name"
                  style={styles.input}
                />
              </td>
              <td style={styles.tableCell}>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </td>
              <td style={styles.tableCell}>
                <input
                  type="date"
                  name="expiration"
                  value={formData.expiration}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </td>
              <td style={styles.tableCell}>
                <button style={styles.saveButton} onClick={handleSave}>
                  Save
                </button>
                <button style={styles.cancelButton} onClick={handleCancel}>
                  Cancel
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Certificate;
