import React from 'react';

function Hero() {
  return (
    <section style={{
      padding: '2rem 1.2rem',
      textAlign: 'center',
      backgroundColor: '#fff3fb',
    }}>
      <h2 style={{
        fontSize: '1.8rem',
        fontWeight: '600',
        marginBottom: '1rem',
        color: '#4b3f72',
        fontFamily: 'Poppins, sans-serif',
      }}>
        Your AI Wellness Companion
      </h2>
      <p style={{
        fontSize: '1rem',
        color: '#555',
        marginBottom: '2rem',
        fontFamily: 'Open Sans, sans-serif',
      }}>
        Chat with your emotional best friend — smart, kind, and always here.
      </p>
      <button style={{
        padding: '0.8rem 1.6rem',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '50px',
        background: 'linear-gradient(to right, #a463f2, #e68edc)',
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        Get Started
      </button>
    </section>
  );
}

export default Hero;
