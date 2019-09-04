import React from 'react';
import { render } from '@testing-library/react';
import Icon24 from './Icon24';
import { ICONS } from './Icon24.constants';

const IconNames = Object.keys(ICONS);

it('should have a displayName', () => {
  expect(Icon24.displayName).toBe('Icon');
});

it('should render with no errors', () => {
  const { container } = render(<Icon24 icon={IconNames[0]} />);
  expect(container.firstChild).toMatchSnapshot();
});

it('should render two paths with the correct values', () => {
  const { getByTestId } = render(<Icon24 icon={IconNames[0]} />);
  const firstPath = getByTestId('first-path');
  const secondPath = getByTestId('second-path');
  expect(firstPath).toHaveAttribute('d', ICONS[IconNames[0]][0]);
  expect(secondPath).toHaveAttribute('d', ICONS[IconNames[0]][1]);
});
