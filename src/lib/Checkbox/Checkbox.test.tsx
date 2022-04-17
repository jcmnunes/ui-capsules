import { checkAccessibility } from '../../test-utils/checkAccessibility';
import { Checkbox } from './Checkbox';
import { render, screen, userEvent } from '../../test-utils/test-utils';

describe('Checkbox', () => {
  checkAccessibility(<Checkbox>Test</Checkbox>);

  it('should render with a label', () => {
    render(<Checkbox>Test</Checkbox>);

    expect(screen.getByRole('checkbox', { name: 'Test' })).toBeInTheDocument();
  });

  it('should change the checked state when clicking', async () => {
    render(<Checkbox>Test</Checkbox>);

    const checkbox = screen.getByRole('checkbox', { name: 'Test' });

    expect(checkbox).not.toBeChecked();

    await userEvent.click(screen.getByRole('checkbox', { name: 'Test' }));

    expect(checkbox).toBeChecked();

    await userEvent.click(screen.getByRole('checkbox', { name: 'Test' }));

    expect(checkbox).not.toBeChecked();
  });

  it('should set disabled attribute on input based on disabled prop', () => {
    render(<Checkbox disabled>Test</Checkbox>);

    expect(screen.getByRole('checkbox', { name: 'Test' })).toBeDisabled();
  });
});
