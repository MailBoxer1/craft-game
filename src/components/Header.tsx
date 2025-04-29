import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import ThemeSwitcher from './ThemeSwitcher'

const Header: React.FC = () => {
  const { colors } = useTheme();

  return (
    <header style={{ 
      background: colors.headerFooterBackground, 
      color: colors.headerFooterText,
      padding: '0.7rem', 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: `1px solid ${colors.border}`,
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Craft Game
      </div>
      <ThemeSwitcher />
    </header>
  )
}

export default Header