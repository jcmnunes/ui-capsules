import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  ElementSize,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Select,
  SelectOption,
  Text,
} from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, SIZE_OPTS } from './Modal.constants';

const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentLabel, setContentLabel] = useState('Example modal');
  const [inputValue, setInputValue] = useState('This is the modal component');
  const [size, setSize] = useState(SIZE_OPTS[1]);

  const Component = (
    <Button leftIcon="eye" onClick={() => setIsOpen(true)}>
      Open Modal
    </Button>
  );

  const code = `<Modal
  isOpen={isOpen}
  onRequestClose={() => setIsOpen(false)}
  contentLabel="Example Modal"
  width={width}
>
  <ModalHeader>Add Task</ModalHeader>

  <ModalCloseButton onClick={() => setIsOpen(false)} />

  <ModalBody>
    <Text color="neutral.700" fontWeight={600} fontSize="small" mb="4">
      What will you be working on?
    </Text>
    <Input
      value={inputValue}
      onChange={ev => setInputValue(ev.target.value)}
      inputSize="large"
      autoFocus
      placeholder="Task summary"
    />

    <Text color="neutral.700" fontWeight={600} fontSize="small" mt="24" mb="4">
      Task scope
    </Text>
    <Select
      value={SIZE_OPTS[0]}
      options={SIZE_OPTS}
      onChange={() => {}}
      menuPortalTarget={document.body}
    />

    <Button leftIcon="plus" variant="ghost" variantColor="neutral" size="small" mt="4">
      Create new scope
    </Button>
  </ModalBody>

  <ModalFooter>
    <Button variant="ghost" variantColor="neutral" onClick={() => setIsOpen(false)}>
      Cancel
    </Button>
    <Button>Add Task</Button>
  </ModalFooter>
</Modal>
`;

  return (
    <Demo codeURL={GITHUB_URL} component={Component} code={code}>
      <Booleans>
        <Checkbox checked={isOpen} onChange={() => setIsOpen(!isOpen)}>
          <pre>isOpen</pre>
        </Checkbox>
      </Booleans>

      <Inputs>
        <div>
          <pre>size</pre>
          <Select
            value={size}
            options={SIZE_OPTS}
            onChange={opt => setSize(opt as SelectOption<ElementSize>)}
          />
        </div>

        <div>
          <pre>contentLabel</pre>
          <Input
            type="text"
            value={contentLabel}
            onChange={ev => setContentLabel(ev.target.value)}
          />
        </div>
      </Inputs>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        size={size.value}
      >
        <ModalHeader>Add Task</ModalHeader>

        <ModalCloseButton onClick={() => setIsOpen(false)} />

        <ModalBody>
          <Text color="neutral.700" fontWeight={600} fontSize="small" mb="4">
            What will you be working on?
          </Text>
          <Input
            value={inputValue}
            onChange={ev => setInputValue(ev.target.value)}
            size="large"
            autoFocus
            placeholder="Task summary"
          />

          <Text color="neutral.700" fontWeight={600} fontSize="small" mt="24" mb="4">
            Task scope
          </Text>
          <Select
            value={SIZE_OPTS[0]}
            options={SIZE_OPTS}
            onChange={() => {}}
            menuPortalTarget={document.body}
          />

          <Button leftIcon="plus" variant="ghost" variantColor="neutral" size="small" mt="4">
            Create new scope
          </Button>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" variantColor="neutral" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button>Add Task</Button>
        </ModalFooter>
      </Modal>
    </Demo>
  );
};

export default ModalDemo;
