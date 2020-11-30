import React, { FC } from 'react';
import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react';
import { Box, BoxProps } from '../Box/Box';

const loading = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

interface Props extends BoxProps {
  circular?: boolean;
}

const StyledSkeleton = styled(Box)<Props>(({ circular }) => ({
  position: 'relative',
  borderRadius: circular ? 999 : 0,
  overflow: 'hidden',

  '&:after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    transform: 'translateX(-100%)',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
    animationName: loading,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
  },
}));

export const Skeleton: FC<Props> = props => <StyledSkeleton {...props} />;

Skeleton.displayName = 'Skeleton';
Skeleton.defaultProps = {
  circular: false,
  bg: 'neutral.100',
};
