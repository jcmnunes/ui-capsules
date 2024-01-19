import { styled, keyframes, css } from 'styled-components';
import { Box } from '../Box/Box';

const loading = keyframes`
  100% { transform: translateX(100%) }
`;

interface SkeletonProps {
  $circular: boolean;
}

export const Skeleton = styled(Box)<SkeletonProps>(
  {},

  css`
    &:after {
      animation: ${loading};
    }
  `,

  ({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: theme.radii.medium,
    background: theme.colors.neutral200,

    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      transform: 'translateX(-100%)',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
      animationDuration: '1s',
      animationIterationCount: 'infinite',

      '.darkTheme &': {
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
      },
    },
  }),

  ({ $circular, theme }) => {
    if ($circular) {
      return {
        borderRadius: theme.radii.full,
      };
    }
  },
);

Skeleton.displayName = 'Skeleton';
Skeleton.defaultProps = {
  $circular: false,
};
