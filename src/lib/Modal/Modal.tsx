import React, { FC } from 'react';
import { ElementSize } from '../types';
import { DialogContent, DialogOverlay, DialogOverlayProps } from '@reach/dialog';
import { styled } from 'styled-components';

const Overlay = styled(DialogOverlay)({
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

interface DialogContentProps {
  size?: ElementSize;
  isDialog?: boolean;
}

const Content = styled(DialogContent)<DialogContentProps>(
  ({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.colors.bg,
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch',
    outline: 'none',
    width: '100%',
    boxShadow: theme.shadows['400'],
    border: 'none',
    borderRadius: 0,
    borderImage: 'initial',
    zIndex: theme.zIndices.modal,

    [theme.media.sm]: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '8px',
    },
  }),

  ({ theme, size }) => {
    switch (size) {
      case 'small':
        return {
          [theme.media.sm]: {
            maxWidth: '400px',
          },
        };
      case 'medium':
        return {
          [theme.media.sm]: {
            maxWidth: '600px',
          },
        };
      case 'large':
        return {
          [theme.media.sm]: {
            maxWidth: '800px',
          },
        };
      default:
        return {};
    }
  },

  ({ isDialog }) => {
    if (isDialog) {
      return {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '8px',
      };
    }
  },
);

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
