import React, { FC } from 'react';
import { icons } from './Icon.constants';
import { IconType } from '../types';
import { Box, BoxProps } from '../Box/Box';

export interface Props extends BoxProps {
  icon: IconType;
  size?: string;
}

export const Icon: FC<Props> = ({ icon, size = '24px', ...rest }) => (
  <Box height={size} {...rest}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={icons[icon]}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  </Box>
);

Icon.displayName = 'Icon';
Icon.defaultProps = {
  size: '24px',
};
