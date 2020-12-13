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
  onRequestClose(): void;
}

export const Dialog: FC<Props> = ({
  isOpen,
  actions,
  contentLabel,
  onRequestClose,
  title,
  message,
  ...rest
}) => {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel={contentLabel}
      onRequestClose={onRequestClose}
      size="small"
      {...rest}
    >
      <ModalHeader>{title}</ModalHeader>

      <ModalCloseButton size="small" onClick={onRequestClose} />

      <ModalBody>
        <Text fontSize="body">{message}</Text>
      </ModalBody>

      <ModalFooter>
        {actions.map(({ text, onClick, variant }) => (
          <Button
            key={text}
            type="button"
            size="large"
            variant={variant === 'neutral' ? 'ghost' : 'solid'}
            variantColor={variant || 'primary'}
            onClick={onClick}
          >
            {text}
          </Button>
        ))}
      </ModalFooter>
    </Modal>
  );
};

Dialog.displayName = 'Dialog';
