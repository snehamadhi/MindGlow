import React from 'react';

function Header() {
  return (
    <header style={{
      width: '100vw',
      background: 'linear-gradient(to right, #cfa8f2, #f8c4e4)',
      padding: '1.5rem 0',
      textAlign: 'center'
    }}>
      <h1 style={{
        margin: 0,
        fontSize: '2rem',
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Poppins, sans-serif'
      }}>
        MindFlow
      </h1>
    </header>
  );
}

export default Header;
