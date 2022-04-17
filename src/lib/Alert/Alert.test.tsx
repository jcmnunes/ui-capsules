import { render, screen, userEvent } from '../../test-utils/test-utils';
import { Alert, AlertProps } from './Alert';
import { checkAccessibility } from '../../test-utils/checkAccessibility';

const defaultProps: AlertProps = {
  variant: 'info',
  title: 'Alert title',
  message: 'Alert message',
  actions: [
    { text: 'Action 1', onClick: jest.fn() },
    { text: 'Action 2', onClick: jest.fn() },
  ],
  onRequestClose: jest.fn(),
};

describe('Alert', () => {
  checkAccessibility(<Alert {...defaultProps} />);

  it('should have role alert', () => {
    render(<Alert message="Alert message" />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('should render the alert icon', () => {
    const { container } = render(<Alert message="Alert message" />);

    expect(container.querySelector('[data-ui-caps="alert-icon"]')).toBeInTheDocument();
  });

  it('should render a close button and call the onClose function when clicked', async () => {
    const onClose = jest.fn();
    const user = userEvent.setup();

    render(<Alert message="Alert message" onRequestClose={onClose} />);

    const closeButton = screen.getByRole('button', { name: 'Close' });
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  it('should render action buttons', async () => {
    const onAction1 = jest.fn();
    const onAction2 = jest.fn();
    const user = userEvent.setup();

    render(
      <Alert
        message="Alert message"
        actions={[
          { text: 'Action 1', onClick: onAction1 },
          { text: 'Action 2', onClick: onAction2 },
        ]}
      />,
    );

    const action1Button = screen.getByRole('button', { name: 'Action 1' });
    const action2Button = screen.getByRole('button', { name: 'Action 2' });

    expect(action1Button).toBeInTheDocument();
    expect(action2Button).toBeInTheDocument();

    await user.click(action1Button);
    await user.click(action2Button);

    expect(onAction1).toHaveBeenCalled();
    expect(onAction2).toHaveBeenCalled();
  });
});
