import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Footer: React.FC = () => {
  const { colors } = useTheme();
  
  return (
    <footer style={{ 
      background: colors.headerFooterBackground, 
      color: colors.headerFooterText, 
      padding: '0.5rem', 
      textAlign: 'center', 
      fontSize: '0.9rem',
      borderTop: `1px solid ${colors.border}`,
    }}>
      © {new Date().getFullYear()} Craft Game
    </footer>
  )
}

export default Footer