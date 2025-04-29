import React from 'react'

const Header: React.FC = () => {
  return (
    <header style={{ 
      background: '#222', 
      color: '#fff', 
      padding: '0.7rem', 
      textAlign: 'center', 
      fontSize: '1.5rem',
      borderBottom: '1px solid #111',
    }}>
      Craft Game
    </header>
  )
}

export default Header