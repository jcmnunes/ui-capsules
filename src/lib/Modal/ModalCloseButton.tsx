import React, { FC, MouseEvent } from 'react';
import { IconButton } from '../IconButton/IconButton';
import { styled } from '../stitches.config';

const StyledIconButton = styled(IconButton, {
  position: 'absolute !important',
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
      variant="ghostGray"
      size={size}
      icon="x"
      onClick={onClick}
      aria-label="Close"
    />
  );
};
