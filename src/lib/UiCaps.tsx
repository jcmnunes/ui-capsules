import 'react-toastify/dist/ReactToastify.css';
import 'focus-visible/dist/focus-visible';
import '@reach/menu-button/styles.css';
import '@reach/tooltip/styles.css';
import React, { createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { Toaster } from './Toast/Toast';
import { useUiCapsTheme } from './hooks/useUiCapsTheme';
import { Theme } from './types';

interface Context {
  isDarkTheme: boolean;
  theme: Theme;
  setTheme(theme: 'light' | 'dark'): void;
}

export const UiCapsContext = createContext<Context | undefined>(undefined);

export const useUiCapsContext = () => {
  const context = useContext(UiCapsContext);

  if (context === undefined) {
    throw new Error('useUiCapsContext must be used within a UiCaps provider');
  }

  return context;
};

interface Props {
  children: React.ReactNode;
}

export const UiCaps = ({ children }: Props) => {
  const themeContext = useUiCapsTheme();

  return (
    <ThemeProvider theme={themeContext.theme}>
      <GlobalStyles />

      <UiCapsContext.Provider value={themeContext}>{children}</UiCapsContext.Provider>

      <Toaster />
    </ThemeProvider>
  );
};
