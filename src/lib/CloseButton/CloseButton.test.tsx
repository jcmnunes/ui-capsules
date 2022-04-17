import { checkAccessibility } from '../../test-utils/checkAccessibility';
import { render, screen, userEvent } from '../../test-utils/test-utils';
import { CloseButton } from './CloseButton';

describe('CloseButton', () => {
  checkAccessibility(<CloseButton />);

  it('should have a aria-label', () => {
    render(<CloseButton />);

    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close');
  });

  it('should call the onClick function', async () => {
    const onClick = jest.fn();

    render(<CloseButton onClick={onClick} />);

    await userEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
