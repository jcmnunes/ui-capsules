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
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  background: '$bg',
  overflow: 'auto',
  '-webkit-overflow-scrolling': 'touch',
  outline: 'none',
  width: '100%',
  boxShadow: 'rgba(0, 0, 0, 0.15) 0 10px 20px, rgba(0, 0, 0, 0.1) 0 3px 6px',
  border: 'none',
  borderRadius: '8px',
  borderImage: 'initial',
  zIndex: '$modal',

  variants: {
    size: {
      small: {
        maxWidth: '400px',
      },
      medium: {
        maxWidth: '600px',
      },
      large: {
        maxWidth: '800px',
      },
    },
  },
});

export interface ModalProps extends DialogOverlayProps {
  isOpen: boolean;
  contentLabel: string;
  onClose?(): void;
  size?: ElementSize;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  contentLabel,
  size = 'medium',
  children,
  ...rest
}) => (
  <Overlay isOpen={isOpen} onDismiss={onClose} {...rest}>
    <Content aria-label={contentLabel} size={size}>
      {children}
    </Content>
  </Overlay>
);

Modal.displayName = 'Modal';
Modal.defaultProps = {
  size: 'medium',
  onClose: undefined,
};
