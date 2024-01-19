import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';
import { theme as lightTheme } from '../theme';
import { darkTheme } from '../darkTheme';

export const useUiCapsTheme = () => {
  const [theme, setTheme] = useLocalStorage('ui-capsules-theme', 'light');

  const isDarkTheme = theme === 'dark';

  useEffect(() => {
    document.body.classList.remove(isDarkTheme ? 'lightTheme' : 'darkTheme');
    document.body.classList.add(isDarkTheme ? 'darkTheme' : 'lightTheme');

    document.documentElement.style.colorScheme = isDarkTheme ? 'dark' : 'light';
  }, [isDarkTheme]);

  return { isDarkTheme, setTheme, theme: isDarkTheme ? darkTheme : lightTheme };
};
