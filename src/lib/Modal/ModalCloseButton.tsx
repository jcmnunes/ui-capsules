import React, { FC, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { IconButton } from '../IconButton/IconButton';

const StyledIconButton = styled(IconButton)({
  position: 'absolute',
  top: 24,
  right: 24,

  '&:hover': {
    background: 'transparent',
  },
});

interface Props {
  size?: 'small' | 'medium';
  onClick(e: MouseEvent<HTMLButtonElement>): void;
}

export const ModalCloseButton: FC<Props> = ({ size, onClick }) => {
  return (
    <StyledIconButton
      variant="ghost"
      variantColor="neutral"
      size={size}
      icon="x"
      onClick={onClick}
    />
  );
};
