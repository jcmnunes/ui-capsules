/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { IconButton } from '..';

interface Props {
  size?: 'small' | 'medium';
  onClick(): void;
}

export const ModalCloseButton: React.FC<Props> = ({ size, onClick }) => {
  return (
    <IconButton
      variant="ghost"
      variantColor="neutral"
      size={size}
      icon="x"
      onClick={onClick}
      css={css`
        position: absolute;
        top: 24px;
        right: 24px;

        &:hover {
          background: transparent;
        }
      `}
    />
  );
};
