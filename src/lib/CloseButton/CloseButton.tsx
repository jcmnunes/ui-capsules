/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { IconButton, Props as IconButtonProps } from '../IconButton/IconButton';

export const CloseButton: FC<Omit<IconButtonProps, 'icon'>> = ({ size, onClick, ...rest }) => (
  <IconButton
    icon="x"
    variant="ghost"
    variantColor="neutral"
    size={size}
    onClick={onClick}
    css={{
      '&:hover': {
        background: 'transparent',
      },
    }}
    {...rest}
  />
);
