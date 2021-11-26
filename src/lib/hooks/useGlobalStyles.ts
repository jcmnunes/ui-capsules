import { darkTheme } from '../darkTheme';
import { globalCss } from '@stitches/react';
import { useTheme } from './useTheme';

const globalStyles = globalCss({
  body: {
    color: '$neutral700',
    background: '$bg',

    [`&.${darkTheme}`]: {
      background: '$bg',
    },
  },
});

export const useGlobalStyles = () => {
  useTheme();

  globalStyles();
};
