import React from 'react';
import { render } from '@testing-library/react';
import { IllustratedIcon } from './IllustratedIcon';
import { illustratedIcons } from './IllustratedIcon.constants';
import { IllustratedIconType } from '../types';

const IconNames = Object.keys(illustratedIcons) as IllustratedIconType[];

describe('IllustratedIcon', () => {
  it('should have a displayName', () => {
    expect(IllustratedIcon.displayName).toBe('IllustratedIcon');
  });

  it('should render with no errors', () => {
    const { container } = render(<IllustratedIcon icon={IconNames[0]} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render two paths with the correct values', () => {
    const { getByTestId } = render(<IllustratedIcon icon={IconNames[0]} />);
    const firstPath = getByTestId('first-path');
    const secondPath = getByTestId('second-path');
    expect(firstPath).toHaveAttribute('d', illustratedIcons[IconNames[0]][0]);
    expect(secondPath).toHaveAttribute('d', illustratedIcons[IconNames[0]][1]);
  });
});
