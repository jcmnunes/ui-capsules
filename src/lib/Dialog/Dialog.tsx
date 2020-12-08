import React, { FC, MouseEvent } from 'react';
import ReactModal from 'react-modal';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { ModalBody } from '../Modal/ModalBody';
import { ModalCloseButton } from '../Modal/ModalCloseButton';
import { ModalFooter } from '../Modal/ModalFooter';
import { ModalHeader } from '../Modal/ModalHeader';
import { Text } from '../Text/Text';

type ActionAppearance = 'primary' | 'neutral' | 'error';

export type DialogAction = {
  name: string;
  appearance?: ActionAppearance;
  action(e: MouseEvent<HTMLButtonElement>): void;
};

interface Props extends ReactModal.Props {
  isOpen: boolean;
  title?: string;
  message: string;
  contentLabel: string;
  actions: DialogAction[];
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
        {actions.map(({ name, action, appearance }) => (
          <Button
            key={name}
            type="button"
            size="large"
            variant={appearance === 'neutral' ? 'ghost' : 'solid'}
            variantColor={appearance || 'primary'}
            onClick={action}
          >
            {name}
          </Button>
        ))}
      </ModalFooter>
    </Modal>
  );
};

Dialog.displayName = 'Dialog';
