import React, { FC } from 'react';
import ReactModal from 'react-modal';
import { ElementSize } from '../types';
import { styled } from '../stitches.config';

const styles = {
  overlay: {
    backgroundColor: 'rgba(60, 63, 75, 0.65)',
    backdropFilter: 'blur(4px)',
  },
};

const StyledModal = styled(ReactModal, {
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

interface Props extends ReactModal.Props {
  isOpen: boolean;
  contentLabel: string;
  onClose?: ReactModal.Props['onRequestClose'];
  size?: ElementSize;
}

export const Modal: FC<Props> = ({ isOpen, onClose, contentLabel, size = 'medium', ...rest }) => (
  <StyledModal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel={contentLabel}
    size={size}
    style={styles}
    {...rest}
  />
);
Modal.displayName = 'Modal';
Modal.defaultProps = {
  size: 'medium',
  onRequestClose: undefined,
};

export { ReactModal };
