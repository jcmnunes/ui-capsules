import React, { FC } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { IconButton } from '../IconButton/IconButton';
import { theme } from '../theme';

const styles = {
  overlay: {
    backgroundColor: 'rgba(60, 63, 75, 0.65)',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
  },
};

interface StyledModalProps {
  width?: string;
}
const StyledModal = styled(ReactModal)<StyledModalProps>`
  position: absolute;
  top: 50%;
  left: 16px;
  right: 16px;
  bottom: auto;
  transform: translate(0, -50%);
  background: #fff;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  outline: none;
  width: auto;
  min-width: 300px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 10px 20px, rgba(0, 0, 0, 0.1) 0 3px 6px;
  border: none;
  border-radius: 8px;
  border-image: initial;
  z-index: ${theme.modalZIndex};

  @media (min-width: ${theme.breakpointsLegacy.mobile}) {
    left: 40px;
    right: 40px;
  }

  @media (min-width: ${theme.breakpointsLegacy.sm}) {
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    width: ${props => props.width || '640px'};
    transform: translate(-50%, -50%);
  }
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 32px 16px;
`;

export const ModalBody = styled.div`
  padding: 0 32px 24px;
`;

export const ModalTitle = styled.h2`
  color: ${theme.neutral700};
  font-size: 22px;
  font-weight: 500;
  line-height: 32px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  background: ${theme.neutral050};
  padding: 16px 24px;

  & > * {
    margin-left: 16px;
  }
`;

interface Props extends ReactModal.Props {
  isOpen: boolean;
  contentLabel: string;
  title: string;
  onRequestClose?(): void;
  width?: string;
  showCloseButton?: boolean;
}

export const Modal: FC<Props> = ({
  isOpen,
  onRequestClose,
  contentLabel,
  width,
  showCloseButton,
  children,
  title,
  ...other
}) => (
  <StyledModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel={contentLabel}
    width={width}
    closeTimeoutMS={200}
    style={styles}
    {...other}
  >
    <ModalHeader>
      <ModalTitle>{title}</ModalTitle>

      {!!onRequestClose && showCloseButton && (
        <IconButton
          variant="ghost"
          variantColor="neutral"
          size="medium"
          icon="x"
          onClick={onRequestClose}
        />
      )}
    </ModalHeader>
    {children}
  </StyledModal>
);
Modal.displayName = 'Modal';

Modal.defaultProps = {
  width: '640px',
  onRequestClose: undefined,
  showCloseButton: true,
};

export { ReactModal };
