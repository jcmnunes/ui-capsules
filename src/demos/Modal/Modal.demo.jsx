import React, { useState } from 'react';
import { Modal, ModalBody, ModalTitle, ModalFooter } from '../../lib/Modal/Modal';
import { Button } from '../../lib/Button/Button';
import { Input } from '../../lib/Input/Input';
import Demo, { Booleans, StyledCheckbox, StyledSelect } from '../../components/Demo/Demo';
import { GITHUB_URL } from './Modal.constants';

const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentLabel, setContentLabel] = useState('Example modal');
  const [inputValue, setInputValue] = useState('This is the modal component');
  const [width, setWidth] = useState('');

  const Component = (
    <Button appearance="primary" iconBefore="APP" onClick={() => setIsOpen(true)}>
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
    <ModalTitle>Example Modal Title</ModalTitle>
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
      <>
        <Booleans>
          <StyledCheckbox checked={isOpen} onChange={() => setIsOpen(!isOpen)} appearance="success">
            <pre>isOpen</pre>
          </StyledCheckbox>
        </Booleans>
        <StyledSelect>
          <pre>contentLabel</pre>
          <Input
            type="text"
            value={contentLabel}
            onChange={ev => setContentLabel(ev.target.value)}
          />
        </StyledSelect>
        <StyledSelect>
          <pre>width</pre>
          <Input type="text" value={width} onChange={ev => setWidth(ev.target.value)} />
        </StyledSelect>
      </>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        width={width}
      >
        <ModalBody>
          <ModalTitle>Example Modal Title</ModalTitle>
          <Input
            value={inputValue}
            onChange={ev => setInputValue(ev.target.value)}
            size="large"
            autoFocus
          />
        </ModalBody>
        <ModalFooter>
          <Button appearance="secondary" size="large" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button appearance="primary" size="large">
            Example Modal
          </Button>
        </ModalFooter>
      </Modal>
    </Demo>
  );
};

export default ModalDemo;
