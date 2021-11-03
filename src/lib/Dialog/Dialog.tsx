import React, { FC } from 'react';
import ReactModal from 'react-modal';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { ModalBody } from '../Modal/ModalBody';
import { ModalCloseButton } from '../Modal/ModalCloseButton';
import { ModalFooter } from '../Modal/ModalFooter';
import { ModalHeader } from '../Modal/ModalHeader';
import { Text } from '../Text/Text';
import { Action } from '../types';

interface Props extends ReactModal.Props {
  isOpen: boolean;
  title?: string;
  message: string;
  contentLabel: string;
  actions: Action[];
  onClose: ReactModal.Props['onRequestClose'];
}

export const Dialog: FC<Props> = ({
  isOpen,
  actions,
  contentLabel,
  onClose,
  title,
  message,
  ...rest
}) => {
  return (
    <Modal isOpen={isOpen} contentLabel={contentLabel} onClose={onClose} size="small" {...rest}>
      <ModalHeader>{title}</ModalHeader>

      {onClose && <ModalCloseButton size="small" onClick={onClose} />}

      <ModalBody>
        <Text css={{ fontSize: '$2' }}>{message}</Text>
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
