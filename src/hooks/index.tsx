import React, {
  useContext, createContext, useState,
} from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { dark, light} from '../styles/theme';

interface ThemeContextData {
  theme: DefaultTheme;
  ToggleTheme(): void;
}

const ThemeContext = createContext({} as ThemeContextData);

export const ThemesProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const ToggleTheme = () => {
    if (theme.title === 'light') {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }} >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}