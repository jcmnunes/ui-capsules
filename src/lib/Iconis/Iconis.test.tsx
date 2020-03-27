import React from 'react';
import { render } from '@testing-library/react';
import { Iconis } from './Iconis';
import { ICONIS } from './Iconis.constants';
import { IconisType } from '../types';

const IconNames = Object.keys(ICONIS) as IconisType[];

describe('Iconis', () => {
  it('should have a displayName', () => {
    expect(Iconis.displayName).toBe('Iconis');
  });

  it('should render with no errors', () => {
    const { container } = render(<Iconis icon={IconNames[0]} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render two paths with the correct values', () => {
    const { getByTestId } = render(<Iconis icon={IconNames[0]} />);
    const firstPath = getByTestId('first-path');
    const secondPath = getByTestId('second-path');
    expect(firstPath).toHaveAttribute('d', ICONIS[IconNames[0]][0]);
    expect(secondPath).toHaveAttribute('d', ICONIS[IconNames[0]][1]);
  });
});
