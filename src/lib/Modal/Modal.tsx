import React, { FC } from 'react';
import { ElementSize } from '../types';
import { styled } from '../stitches.config';
import { DialogContent, DialogOverlay, DialogOverlayProps } from '@reach/dialog';

const Overlay = styled(DialogOverlay, {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(60, 63, 75, 0.65)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backdropFilter: 'blur(4px)',
});

const Content = styled(DialogContent, {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: '$bg',
  overflow: 'auto',
  '-webkit-overflow-scrolling': 'touch',
  outline: 'none',
  width: '100%',
  boxShadow: '$400',
  border: 'none',
  borderRadius: 0,
  borderImage: 'initial',
  zIndex: '$modal',

  '@sm': {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '8px',
  },

  variants: {
    size: {
      small: {
        '@sm': {
          maxWidth: '400px',
        },
      },
      medium: {
        '@sm': {
          maxWidth: '600px',
        },
      },
      large: {
        '@sm': {
          maxWidth: '800px',
        },
      },
    },

    isDialog: {
      true: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '8px',
      },
    },
  },
});

export interface ModalProps extends DialogOverlayProps {
  isOpen: boolean;
  contentLabel: string;
  onClose?(): void;
  size?: ElementSize;
  isDialog?: boolean;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  contentLabel,
  size = 'medium',
  children,
  isDialog,
  ...rest
}) => (
  <Overlay isOpen={isOpen} onDismiss={onClose} {...rest}>
    <Content aria-label={contentLabel} size={size} isDialog={isDialog}>
      {children}
    </Content>
  </Overlay>
);

Modal.displayName = 'Modal';
Modal.defaultProps = {
  size: 'medium',
  onClose: undefined,
};
