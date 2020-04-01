import React, { FC } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { Button } from '../Button/Button';
import { Modal, ModalBody, ModalFooter, ModalTitle } from '../Modal/Modal';
import { theme } from '../theme';
import { ButtonAppearance } from '../types';

const StyledModal = styled(Modal)`
  width: auto;

  @media (min-width: ${theme.breakpoints.mobile}) {
    left: 60px;
    right: 60px;
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    width: 450px;
    left: 50%;
    right: auto;
  }
`;

const Message = styled.p`
  font-size: 18px;
  color: ${theme.neutral600};
  text-align: left;
`;

const StyledModalFooter = styled(ModalFooter)`
  justify-content: flex-end;
  background: ${theme.neutral050};
`;

const StyledModalBody = styled(ModalBody)<{ hasTitle: boolean }>`
  padding-top: ${({ hasTitle }) => hasTitle && '12px'};
`;

type Action = {
  name: string;
  appearance?: ButtonAppearance;
  action(): void;
};

interface Props extends ReactModal.Props {
  isOpen: boolean;
  contentLabel: string;
  actions: Action[];
  onRequestClose(): void;
  title?: string;
  message: string;
}

export const Dialog: FC<Props> = ({
  isOpen,
  actions,
  contentLabel,
  onRequestClose,
  title,
  message,
  ...other
}) => {
  return (
    <StyledModal
      isOpen={isOpen}
      contentLabel={contentLabel}
      onRequestClose={onRequestClose}
      showCloseButton={false}
      {...other}
    >
      <StyledModalBody hasTitle={!!title}>
        {!!title && <ModalTitle>{title}</ModalTitle>}
        <Message>{message}</Message>
      </StyledModalBody>
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
