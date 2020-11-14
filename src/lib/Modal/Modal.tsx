import React, { FC } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { theme } from '../theme';
import { variant } from 'styled-system';
import { LayoutProps } from '../styledProps';
import { ElementSize } from '../types';

const styles = {
  overlay: {
    backgroundColor: 'rgba(60, 63, 75, 0.65)',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
  },
};

interface StyledModalProps {
  size: ElementSize;
}

const StyledModal = styled(ReactModal)<StyledModalProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background: #fff;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  outline: none;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0 10px 20px, rgba(0, 0, 0, 0.1) 0 3px 6px;
  border: none;
  border-radius: 8px;
  border-image: initial;
  z-index: ${theme.modalZIndex};

  ${variant<LayoutProps, ElementSize>({
    prop: 'size',
    variants: {
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
  })}
`;

interface Props extends ReactModal.Props {
  isOpen: boolean;
  contentLabel: string;
  onRequestClose?(): void;
  size?: ElementSize;
}

export const Modal: FC<Props> = ({
  isOpen,
  onRequestClose,
  contentLabel,
  size = 'medium',
  children,
  ...rest
}) => (
  <StyledModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel={contentLabel}
    size={size}
    style={styles}
    {...rest}
  >
    {children}
  </StyledModal>
);
Modal.displayName = 'Modal';

Modal.defaultProps = {
  size: 'medium',
  onRequestClose: undefined,
};

export { ReactModal };
