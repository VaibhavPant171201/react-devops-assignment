import React from 'react';

function App() {
  const userName = "Vaibhav"; // You can change this dynamically later

  const styles = {
    app: {
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #6b73ff, #000dff)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      padding: '2rem',
      borderRadius: '12px',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
    },
    text: {
      fontSize: '1.2rem',
      marginBottom: '2rem',
    },
    button: {
      padding: '0.8rem 1.5rem',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: '#ff4081',
      color: 'white',
      cursor: 'pointer',
      transition: 'background 0.3s',
    },
    buttonHover: {
      backgroundColor: '#e73370',
    },
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome, {userName}!</h1>
        <p style={styles.text}>We're glad to have you here.</p>
        <button
          style={styles.button}
          onMouseOver={e => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={e => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
          onClick={() => alert('Explore the app!')}
        >
          Get Started
        </button>
      </header>
    </div>
  );
}

export default App;
