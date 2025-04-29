import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeType = 'light' | 'dark' | 'gray' | 'lightGray';

interface ThemeColors {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  sidebarBackground: string;
  headerFooterBackground: string;
  headerFooterText: string;
  mainContentBackground: string;
  workAreaBackground: string;
  elementBackground: string;
  elementText: string;
}

const themes: Record<ThemeType, ThemeColors> = {
  light: {
    background: '#f5f5f5',
    foreground: '#ffffff',
    primary: '#3498db',
    secondary: '#2ecc71',
    accent: '#f1c40f',
    textPrimary: '#333333',
    textSecondary: '#666666',
    border: '#dddddd',
    sidebarBackground: '#ffffff',
    headerFooterBackground: '#1e88e5',
    headerFooterText: '#ffffff',
    mainContentBackground: '#f5f5f5',
    workAreaBackground: '#ffffff',
    elementBackground: '#f0f0f0',
    elementText: '#333333',
  },
  dark: {
    background: '#121212',
    foreground: '#1e1e1e',
    primary: '#3498db',
    secondary: '#2ecc71',
    accent: '#f1c40f',
    textPrimary: '#ffffff',
    textSecondary: '#aaaaaa',
    border: '#333333',
    sidebarBackground: '#1e1e1e',
    headerFooterBackground: '#0d47a1',
    headerFooterText: '#ffffff',
    mainContentBackground: '#121212',
    workAreaBackground: '#1e1e1e',
    elementBackground: '#2a2a2a',
    elementText: '#ffffff',
  },
  gray: {
    background: '#424242',
    foreground: '#4f4f4f',
    primary: '#3498db',
    secondary: '#2ecc71',
    accent: '#f1c40f',
    textPrimary: '#ffffff',
    textSecondary: '#cccccc',
    border: '#555555',
    sidebarBackground: '#4f4f4f',
    headerFooterBackground: '#333333',
    headerFooterText: '#ffffff',
    mainContentBackground: '#424242',
    workAreaBackground: '#4f4f4f',
    elementBackground: '#5a5a5a',
    elementText: '#f0f0f0',
  },
  lightGray: {
    background: '#e0e0e0',
    foreground: '#f0f0f0',
    primary: '#3498db',
    secondary: '#2ecc71',
    accent: '#f1c40f',
    textPrimary: '#333333',
    textSecondary: '#666666',
    border: '#cccccc',
    sidebarBackground: '#f0f0f0',
    headerFooterBackground: '#757575',
    headerFooterText: '#ffffff',
    mainContentBackground: '#e0e0e0',
    workAreaBackground: '#f0f0f0',
    elementBackground: '#e6e6e6',
    elementText: '#333333',
  }
};

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  colors: ThemeColors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [colors, setColors] = useState<ThemeColors>(themes.light);

  // При загрузке страницы, проверить сохраненную тему
  useEffect(() => {
    const savedTheme = localStorage.getItem('craftGameTheme') as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme);
      setColors(themes[savedTheme]);
    } else {
      // Использовать предпочтения системы по умолчанию
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        setTheme('dark');
        setColors(themes.dark);
      }
    }
  }, []);

  // Сохранять тему при изменении
  const changeTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
    setColors(themes[newTheme]);
    localStorage.setItem('craftGameTheme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme должен использоваться внутри ThemeProvider');
  }
  return context;
};