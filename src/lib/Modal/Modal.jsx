import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import Button from '../Button/Button';
import theme from '../theme';

const styles = {
  overlay: {
    backgroundColor: 'rgba(180, 180, 180, 0.75)',
  },
};

const StyledModal = styled(ReactModal)`
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
  border-radius: 16px;
  border-image: initial;
  z-index: ${theme.modalZIndex};

  @media (min-width: ${theme.bp_mobile}) {
    left: 40px;
    right: 40px;
  }

  @media (min-width: ${theme.bp_small}) {
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
  justify-content: flex-end;
  height: 40px;
  padding: 16px 16px 0;
  color: ${theme.neutral200};
`;

export const ModalBody = styled.div`
  padding: 32px 32px 48px;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: inherit;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  background: ${theme.neutral050};
  padding: 18px 24px;

  & > * {
    margin-left: 16px;
  }
`;

const Modal = ({
  isOpen,
  onRequestClose,
  contentLabel,
  width,
  showCloseButton,
  children,
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
      {!!onRequestClose && showCloseButton && (
        <Button appearance="none" size="medium" iconBefore="CLOSE" onClick={onRequestClose} />
      )}
    </ModalHeader>
    {children}
  </StyledModal>
);
Modal.displayName = 'Modal';

Modal.defaultProps = {
  width: '640px',
  onRequestClose: null,
  showCloseButton: true,
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  contentLabel: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func,
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
  showCloseButton: PropTypes.bool,
};

export default Modal;
export { ReactModal };
