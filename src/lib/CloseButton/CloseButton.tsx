import React, { FC } from 'react';
import { IconButton, IconButtonProps } from '../IconButton/IconButton';
import { styled } from 'styled-components';

const StyledIconButton = styled(IconButton)({
  '&:hover': {
    background: 'transparent',
  },
});

export const CloseButton: FC<Omit<IconButtonProps, 'icon'>> = ({ size, onClick, ...rest }) => (
  <StyledIconButton icon="x" variant="ghostGray" size={size} onClick={onClick} {...rest} />
);
