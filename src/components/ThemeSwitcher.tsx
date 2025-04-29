import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, colors } = useTheme();

  return (
    <div style={{ 
      display: 'flex', 
      gap: '10px',
      marginRight: '15px' 
    }}>
      <button
        onClick={() => setTheme('light')}
        style={{
          background: theme === 'light' ? '#3498db' : '#f0f0f0',
          color: theme === 'light' ? '#fff' : '#333',
          border: `1px solid ${theme === 'light' ? '#2980b9' : '#ccc'}`,
          borderRadius: '4px',
          padding: '4px 8px',
          fontSize: '0.8rem',
          cursor: 'pointer'
        }}
      >
        Светлая
      </button>
      <button
        onClick={() => setTheme('dark')}
        style={{
          background: theme === 'dark' ? '#3498db' : '#f0f0f0',
          color: theme === 'dark' ? '#fff' : '#333',
          border: `1px solid ${theme === 'dark' ? '#2980b9' : '#ccc'}`,
          borderRadius: '4px',
          padding: '4px 8px',
          fontSize: '0.8rem',
          cursor: 'pointer'
        }}
      >
        Темная
      </button>
      <button
        onClick={() => setTheme('gray')}
        style={{
          background: theme === 'gray' ? '#3498db' : '#f0f0f0',
          color: theme === 'gray' ? '#fff' : '#333',
          border: `1px solid ${theme === 'gray' ? '#2980b9' : '#ccc'}`,
          borderRadius: '4px',
          padding: '4px 8px',
          fontSize: '0.8rem',
          cursor: 'pointer'
        }}
      >
        Серая
      </button>
      <button
        onClick={() => setTheme('lightGray')}
        style={{
          background: theme === 'lightGray' ? '#3498db' : '#f0f0f0',
          color: theme === 'lightGray' ? '#fff' : '#333',
          border: `1px solid ${theme === 'lightGray' ? '#2980b9' : '#ccc'}`,
          borderRadius: '4px',
          padding: '4px 8px',
          fontSize: '0.8rem',
          cursor: 'pointer'
        }}
      >
        Светло-серая
      </button>
    </div>
  );
};

export default ThemeSwitcher;