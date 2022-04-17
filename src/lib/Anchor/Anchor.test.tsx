import { checkAccessibility } from '../../test-utils/checkAccessibility';
import { Anchor, AnchorProps } from './Anchor';
import { render } from '../../test-utils/test-utils';

const defaultProps: AnchorProps = {
  href: 'https://uic.binarycapsule.tech/',
  children: 'UI-Capsules',
};

describe('Anchor', () => {
  checkAccessibility(<Anchor {...defaultProps} />);

  it('should render the necessary anchor attributes', () => {
    const { container } = render(<Anchor {...defaultProps} />);
    const anchor = container.querySelector('a');

    expect(anchor).toHaveAttribute('href', defaultProps.href);
    expect(anchor).toHaveAttribute('target', '_blank');
    expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
