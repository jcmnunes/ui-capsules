import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';
import { lightTheme } from '../lightTheme';
import { darkTheme } from '../darkTheme';

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('ui-capsules-theme', 'light');

  const isDark = theme === 'dark';

  useEffect(() => {
    document.body.classList.remove(isDark ? lightTheme : darkTheme);
    document.body.classList.add(isDark ? darkTheme : lightTheme);

    // @ts-ignore
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  }, [isDark]);

  return { isDark, setTheme };
};
