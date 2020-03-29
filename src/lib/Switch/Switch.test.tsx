import React from 'react';
import { render } from '@testing-library/react';
import { Switch } from '..';

describe('Switch', () => {
  it('should have a displayName', () => {
    expect(Switch.displayName).toBe('Switch');
  });

  it('should render without errors', () => {
    const { container } = render(<Switch checked onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render an unchecked switch', () => {
    const { container } = render(<Switch checked={false} onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
