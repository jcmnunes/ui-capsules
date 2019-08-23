import React from 'react';
import { render } from '@testing-library/react';
import RModal from 'react-modal';
import Modal, { ModalBody, ModalFooter, ModalTitle } from './Modal';

const bindApp = () => {
  const app = document.createElement('div');
  app.setAttribute('id', 'root');
  document.body.append(app);
  RModal.setAppElement('#root');
};

const CONTENT_LABEL = 'Example Modal';
const LABEL_TEXT = 'Label text';

const getModalElement = baseElement => baseElement.querySelector(`[aria-label="${CONTENT_LABEL}"]`);

const ModalContent = () => (
  <>
    <ModalBody>
      <ModalTitle>Modal title</ModalTitle>
      <label htmlFor="input-id">
        {LABEL_TEXT}
        <input id="input-id" type="text" />
      </label>
    </ModalBody>
    <ModalFooter>Footer</ModalFooter>
  </>
);

beforeEach(() => {
  bindApp();
});

afterEach(() => {
  document.body.removeChild(document.querySelector('#root'));
});

it('should have a displayName', () => {
  expect(Modal.displayName).toBe('Modal');
});

it('should render with no errors', () => {
  const { baseElement, getByLabelText } = render(
    <Modal isOpen contentLabel={CONTENT_LABEL} onRequestClose={() => {}}>
      <ModalContent />
    </Modal>,
  );
  expect(getByLabelText(LABEL_TEXT)).toBeInTheDocument();
  expect(getModalElement(baseElement)).toMatchSnapshot();
});

it('should not render the modal when isOpen is set to false', () => {
  const { baseElement } = render(
    <Modal isOpen={false} contentLabel={CONTENT_LABEL} onRequestClose={() => {}}>
      <ModalContent />
    </Modal>,
  );
  expect(getModalElement(baseElement)).toBeNull();
});
