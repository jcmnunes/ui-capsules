import React, { FC } from 'react';
import { solidIcons } from './IconSolid.constants';
import { IconSolidType } from '../types';
import { Box, BoxProps } from '../Box/Box';

export interface Props extends BoxProps {
  icon: IconSolidType;
  size?: string;
}

export const IconSolid: FC<Props> = ({ icon, size = '24px', ...rest }) => (
  <Box height={size} {...rest}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={solidIcons[icon]} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  </Box>
);

IconSolid.displayName = 'IconSolid';
IconSolid.defaultProps = {
  size: '20px',
};
