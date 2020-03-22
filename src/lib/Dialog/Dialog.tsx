import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { Modal, ModalBody, ModalFooter } from '../Modal/Modal';
import { theme } from '../theme';
import { ButtonAppearance } from '../typings';

const StyledModal = styled(Modal)`
  width: auto;
  border-radius: 8px;

  @media (min-width: ${theme.breakpoints.mobile}) {
    left: 60px;
    right: 60px;
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    width: 500px;
    left: 50%;
    right: auto;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  color: ${theme.neutral600};
  font-weight: 700;
  text-align: left;
  margin-bottom: 6px;
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

interface Props {
  isOpen: boolean;
  contentLabel: string;
  actions: Action[];
  onRequestClose(): void;
  title?: string;
  message: string;
}

export const Dialog: React.FC<Props> = ({
  isOpen,
  actions,
  contentLabel,
  onRequestClose,
  title,
  message,
}) => {
  return (
    <StyledModal
      isOpen={isOpen}
      contentLabel={contentLabel}
      onRequestClose={onRequestClose}
      showCloseButton={false}
    >
      <StyledModalBody hasTitle={!!title}>
        {!!title && <Title>{title}</Title>}
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
