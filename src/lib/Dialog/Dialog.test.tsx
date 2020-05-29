import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RModal from 'react-modal';
import { Dialog } from './Dialog';
import { DialogAction } from '../types';

const bindApp = () => {
  const app = document.createElement('div');
  app.setAttribute('id', 'root');
  document.body.append(app);
  RModal.setAppElement('#root');
};

const CONTENT_LABEL = 'Example Dialog';
const DIALOG_TEXT = 'Are you sure you want to delete?';

const getDialogElement = (baseElement: HTMLElement) =>
  baseElement.querySelector(`[aria-label="${CONTENT_LABEL}"]`);

beforeEach(() => {
  bindApp();
});

afterEach(() => {
  document.body.removeChild(document.querySelector('#root') as Node);
});

it('should have a displayName', () => {
  expect(Dialog.displayName).toBe('Dialog');
});

describe('Dialog with two actions', () => {
  const cancelAction = jest.fn();
  const deleteAction = jest.fn();
  const actions: DialogAction[] = [
    {
      name: 'Cancel',
      appearance: 'secondary',
      action: cancelAction,
    },
    {
      name: 'Delete',
      appearance: 'error',
      action: deleteAction,
    },
  ];

  // eslint-disable-next-line react/prop-types
  const DialogTwoActions = ({ isOpen }: { isOpen: boolean }) => (
    <Dialog
      isOpen={isOpen}
      onRequestClose={cancelAction}
      contentLabel="Example Dialog"
      actions={actions}
      message={DIALOG_TEXT}
    />
  );

  beforeEach(() => {
    cancelAction.mockReset();
    deleteAction.mockReset();
  });

  it('should render with no errors', () => {
    const { baseElement, getByText } = render(<DialogTwoActions isOpen />);
    expect(getByText(DIALOG_TEXT)).toBeInTheDocument();
    expect(getDialogElement(baseElement)).toMatchSnapshot();
  });

  it('should not render the dialog when isOpen is set to false', () => {
    const { baseElement } = render(<DialogTwoActions isOpen={false} />);
    expect(getDialogElement(baseElement)).toBeNull();
  });

  it('should set the aria-label attribute', () => {
    const { baseElement } = render(<DialogTwoActions isOpen />);
    expect(getDialogElement(baseElement)).toHaveAttribute('aria-label', CONTENT_LABEL);
  });

  it('should call actions when clicking the footer buttons (1)', () => {
    const { getByText } = render(<DialogTwoActions isOpen />);
    fireEvent.click(getByText('Cancel'));
    expect(cancelAction).toHaveBeenCalledTimes(1);
    expect(deleteAction).toHaveBeenCalledTimes(0);
  });

  it('should call actions when clicking the footer buttons (2)', () => {
    const { getByText } = render(<DialogTwoActions isOpen />);
    fireEvent.click(getByText('Delete'));
    expect(cancelAction).toHaveBeenCalledTimes(0);
    expect(deleteAction).toHaveBeenCalledTimes(1);
  });

  it('should render one button per action', () => {
    const { getByTestId } = render(<DialogTwoActions isOpen />);
    const footer = getByTestId('dialog-footer');
    const buttons = footer.querySelectorAll('button');
    expect(buttons.length).toBe(actions.length);
  });
});
