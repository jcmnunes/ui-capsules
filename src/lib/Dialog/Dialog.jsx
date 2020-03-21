import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button/Button';
import Modal, { ModalBody, ModalFooter } from '../Modal/Modal';
import theme from '../theme';

export const StyledModal = styled(Modal)`
  width: auto;

  @media (min-width: ${theme.bp_mobile}) {
    left: 60px;
    right: 60px;
  }

  @media (min-width: ${theme.bp_small}) {
    width: 400px;
    left: 50%;
    right: auto;
  }
`;

const Message = styled.h1`
  font-size: 18px;
  color: ${theme.neutral600};
  text-align: left;
`;

const StyledModalFooter = styled(ModalFooter)`
  justify-content: flex-end;
  background: ${theme.neutral050};
`;

const Dialog = ({ isOpen, actions, contentLabel, onRequestClose, children }) => {
  return (
    <StyledModal
      isOpen={isOpen}
      contentLabel={contentLabel}
      onRequestClose={onRequestClose}
      showCloseButton={false}
    >
      <ModalBody>
        <Message>{children}</Message>
      </ModalBody>
      <StyledModalFooter data-testid="dialog-footer">
        {actions.map(({ name, appearance, action }) => (
          <Button key={name} type="button" appearance={appearance} size="large" onClick={action}>
            {name}
          </Button>
        ))}
      </StyledModalFooter>
    </StyledModal>
  );
};
Dialog.displayName = 'Dialog';

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  contentLabel: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      intent: PropTypes.string,
      action: PropTypes.func.isRequired,
    }),
  ).isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Dialog;
