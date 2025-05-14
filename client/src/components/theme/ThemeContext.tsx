import React, { createContext, useState, useContext, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => { },
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    //  get the current theme from local storage
    const storedTheme = localStorage.getItem('theme');
    console.log(storedTheme + "main");
    return (storedTheme === 'dark' || storedTheme === 'light') ? storedTheme : 'light';
  });

  useEffect(() => {
    // Set the theme in local Storage
    localStorage.setItem('theme', theme);
    document.body.className = theme; // Set class on <body>
  }, [theme])
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);