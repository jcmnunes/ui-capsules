import React from 'react';
import { render } from '@testing-library/react';
import Icon from './Icon';
import { ICONS } from './Icon.constants';

const IconNames = Object.keys(ICONS);

it('should have a displayName', () => {
  expect(Icon.displayName).toBe('Icon');
});

it('should render with no errors', () => {
  const { container } = render(<Icon icon={IconNames[0]} />);
  expect(container.firstChild).toMatchSnapshot();
});

it('should render two paths with the correct values', () => {
  const { getByTestId } = render(<Icon icon={IconNames[0]} />);
  const firstPath = getByTestId('first-path');
  const secondPath = getByTestId('second-path');
  expect(firstPath).toHaveAttribute('d', ICONS[IconNames[0]][0]);
  expect(secondPath).toHaveAttribute('d', ICONS[IconNames[0]][1]);
});
