import React, { FC } from 'react';
import { Button } from '../Button/Button';
import { Modal, Props as ModalProps } from '../Modal/Modal';
import { ModalBody } from '../Modal/ModalBody';
import { ModalCloseButton } from '../Modal/ModalCloseButton';
import { ModalFooter } from '../Modal/ModalFooter';
import { ModalHeader } from '../Modal/ModalHeader';
import { Text } from '../Text/Text';
import { Action } from '../types';

export interface Props extends ModalProps {
  title?: string;
  message: string;
  actions: Action[];
  variant?: 'success' | 'warning' | 'error';
}

export const Dialog: FC<Props> = ({
  isOpen,
  actions,
  contentLabel,
  onClose,
  title,
  message,
  variant,
  ...rest
}) => {
  return (
    <Modal isOpen={isOpen} contentLabel={contentLabel} onClose={onClose} isDialog {...rest}>
      <ModalHeader variant={variant}>{title}</ModalHeader>

      {onClose && <ModalCloseButton size="small" onClick={onClose} />}

      <ModalBody>
        <Text size="md">{message}</Text>
      </ModalBody>

      <ModalFooter>
        {actions.map(({ text, onClick, variant }) => (
          <Button key={text} type="button" variant={variant} onClick={onClick}>
            {text}
          </Button>
        ))}
      </ModalFooter>
    </Modal>
  );
};

Dialog.displayName = 'Dialog';
