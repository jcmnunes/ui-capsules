import React, { FC, MouseEvent } from 'react';
import { IconButton } from '../IconButton/IconButton';
import { styled } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const StyledIconButton = styled(IconButton)({
  position: 'absolute !important',
  top: 24,
  right: 24,

  '&:hover': {
    background: 'transparent',
  },
});

export interface Props {
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
