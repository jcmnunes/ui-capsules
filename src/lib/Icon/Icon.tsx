import React, { FC } from 'react';
import { icons } from './Icon.constants';
import { IconType } from '../types';
import { styled } from '../theme';
import { color, compose, flexbox, FlexboxProps, space } from 'styled-system';
import { ColorProps, SpaceProps } from '../styledProps';
import { Box } from '../Box/Box';

export interface Props extends ColorProps, SpaceProps, FlexboxProps {
  icon: IconType;
  size?: string;
}

export const StyledIcon = styled(Box)(compose(color, space, flexbox));

export const Icon: FC<Props> = ({ icon, size = '24px', ...rest }) => (
  <StyledIcon height={size} {...rest}>
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
  </StyledIcon>
);

Icon.displayName = 'Icon';
Icon.defaultProps = {
  size: '24px',
};
