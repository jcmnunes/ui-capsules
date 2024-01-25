import React, { ComponentPropsWithoutRef } from 'react';
import { styled, keyframes, css } from 'styled-components';

const loading = keyframes`
  100% { transform: translateX(100%) }
`;

interface StyledSkeletonProps {
  $isRound?: boolean;
  $width?: number | string;
  $height?: number | string;
}

const StyledSkeleton = styled.div<StyledSkeletonProps>(
  {},

  css`
    &:after {
      animation: ${loading};
    }
  `,

  ({ theme, $width, $height, $isRound }) => ({
    width: $width || 'unset',
    height: $height || 'unset',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: $isRound ? theme.radii.full : theme.radii.medium,
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
);

export interface Props extends ComponentPropsWithoutRef<'div'> {
  isRound?: boolean;
  width?: number | string;
  height?: number | string;
}

export const Skeleton = ({ isRound, width, height, ...rest }: Props) => {
  return <StyledSkeleton $isRound={isRound} $width={width} $height={height} {...rest} />;
};

Skeleton.displayName = 'Skeleton';
Skeleton.defaultProps = {
  isRound: false,
};
