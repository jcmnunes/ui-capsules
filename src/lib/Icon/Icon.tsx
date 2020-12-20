import React, { FC, useMemo } from 'react';
import { solidIcons, outlineIcons } from './Icon.constants';
import { IconType, IconVariant } from '../types';
import { Box, BoxProps } from '../Box/Box';

export interface IconProps extends BoxProps {
  icon: IconType;
  variant?: IconVariant;
  size?: number;
}

export const Icon: FC<IconProps> = ({ icon, size, variant = 'solid', ...rest }) => {
  const iconSize = useMemo(() => {
    if (size) {
      return size;
    }

    return variant === 'solid' ? 20 : 24;
  }, [size, variant]);

  return (
    <Box height={iconSize} {...rest}>
      <svg
        width={`${iconSize}px`}
        height={`${iconSize}px`}
        viewBox={variant === 'solid' ? '0 0 20 20' : '0 0 24 24'}
        fill={variant === 'solid' ? 'currentColor' : 'none'}
        xmlns="http://www.w3.org/2000/svg"
      >
        {variant === 'solid' ? (
          <path d={solidIcons[icon]} fillRule="evenodd" clipRule="evenodd" />
        ) : (
          <path
            d={outlineIcons[icon]}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        )}
      </svg>
    </Box>
  );
};

Icon.displayName = 'Icon';
