import { styled, keyframes } from '../stitches.config';
import { Box } from '../Box/Box';
import { darkTheme } from '../darkTheme';

const loading = keyframes({
  '100%': { transform: 'translateX(100%)' },
});

export const Skeleton = styled(Box, {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '$medium',
  background: '$neutral200',

  '&:after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    transform: 'translateX(-100%)',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
    animationName: loading,
    animationDuration: '1s',
    animationIterationCount: 'infinite',

    [`.${darkTheme} &`]: {
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
    },
  },

  variants: {
    circular: {
      true: {
        borderRadius: '$full',
      },
    },
  },
});

Skeleton.displayName = 'Skeleton';
Skeleton.defaultProps = {
  circular: false,
};
