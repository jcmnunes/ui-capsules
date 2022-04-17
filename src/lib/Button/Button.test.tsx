import { checkAccessibility } from '../../test-utils/checkAccessibility';
import { Button } from './Button';
import { render } from '../../test-utils/test-utils';
import { screen } from '@testing-library/dom';

describe('Button', () => {
  checkAccessibility(<Button>Button</Button>);

  it('should pass the button type', () => {
    render(<Button type="submit">Button</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('sets disabled attribute based on prop', () => {
    render(<Button disabled>Button</Button>);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should be disabled and render a Spinner based on prop', () => {
    const { container } = render(<Button isLoading>Button</Button>);

    expect(screen.getByRole('button')).toBeDisabled();
    expect(container.querySelector('[data-ui-caps="spinner"]')).toBeInTheDocument();
  });
});
