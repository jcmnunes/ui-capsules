import React, { FC } from 'react';
import styled from '@emotion/styled';
import { IconButton, Props as IconButtonProps } from '../IconButton/IconButton';

const StyledIconButton = styled(IconButton)({
  '&:hover': {
    background: 'transparent',
  },
});

export const CloseButton: FC<Omit<IconButtonProps, 'icon'>> = ({ size, onClick, ...rest }) => (
  <StyledIconButton
    icon="x"
    variant="ghost"
    variantColor="neutral"
    size={size}
    onClick={onClick}
    {...rest}
  />
);
