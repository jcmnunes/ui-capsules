import React, { useState } from 'react';
import { Button, Checkbox, Input, Modal, ModalBody, ModalFooter, Select, Text } from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL } from './Modal.constants';
import { SIZE_OPTS } from '../common/selectOptions';

const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentLabel, setContentLabel] = useState('Example modal');
  const [inputValue, setInputValue] = useState('This is the modal component');
  const [width, setWidth] = useState('');

  const Component = (
    <Button leftIcon="eye" onClick={() => setIsOpen(true)}>
      Open Modal
    </Button>
  );

  const code = `<Modal
  isOpen={isOpen}
  onRequestClose={() => closeModal()}
  contentLabel="${contentLabel}"
  width="${width}"
>
  <ModalBody>
    <Input
      value={value}
      onChange={handleChange}
      size="large"
      autoFocus
    />
  </ModalBody>
  <ModalFooter>
    <Button
      appearance="secondary"
      size="large"
      onClick={() => closeModal()}
    >
      Cancel
    </Button>
    <Button appearance="primary" size="large">
      Example Modal
    </Button>
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
          <pre>contentLabel</pre>
          <Input
            type="text"
            value={contentLabel}
            onChange={ev => setContentLabel(ev.target.value)}
          />
        </div>
        <div>
          <pre>width</pre>
          <Input type="text" value={width} onChange={ev => setWidth(ev.target.value)} />
        </div>
      </Inputs>

      <Modal
        title="Add Task"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        width={width}
      >
        <ModalBody>
          <Text color="neutral.700" fontWeight={600} fontSize="body" mb="4">
            What will you be working on?
          </Text>
          <Input
            value={inputValue}
            onChange={ev => setInputValue(ev.target.value)}
            inputSize="large"
            autoFocus
            placeholder="Task summary"
          />

          <Text color="neutral.700" fontWeight={600} fontSize="body" mt="24" mb="4">
            Task scope
          </Text>
          <Select value={SIZE_OPTS[0]} options={SIZE_OPTS} onChange={() => {}} />

          <Button leftIcon="plus" variant="ghost" variantColor="neutral" size="small" mt="4">
            Create new scope
          </Button>
        </ModalBody>

        <ModalFooter>
          <Button
            variant="ghost"
            variantColor="neutral"
            size="large"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button size="large">Add Task</Button>
        </ModalFooter>
      </Modal>
    </Demo>
  );
};

export default ModalDemo;
