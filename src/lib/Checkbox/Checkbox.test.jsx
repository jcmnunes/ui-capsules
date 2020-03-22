import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('should have a displayName', () => {
    expect(Checkbox.displayName).toBe('Checkbox');
  });

  it('should render with no errors', () => {
    const { container } = render(
      <Checkbox checked onChange={() => {}}>
        checkbox label
      </Checkbox>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have the checkbox checked when passing checked prop as true', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Checkbox checked onChange={onChange}>
        checkbox label
      </Checkbox>,
    );
    const checkbox = getByLabelText(/checkbox label/i);
    expect(checkbox.checked).toBe(true);
  });

  it('should have the checkbox checked when passing checked prop as false', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Checkbox checked={false} onChange={onChange}>
        checkbox label
      </Checkbox>,
    );
    const checkbox = getByLabelText(/checkbox label/i);
    expect(checkbox.checked).toBe(false);
  });

  it('should call the passed onChange function when clicking the label', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Checkbox checked onChange={onChange}>
        checkbox label
      </Checkbox>,
    );
    const label = getByTestId('label');
    fireEvent.click(label);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should be a controlled component', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Checkbox checked onChange={onChange}>
        checkbox label
      </Checkbox>,
    );
    const checkbox = getByLabelText(/checkbox label/i);
    fireEvent.click(checkbox);
    // Checkbox should not be unchecked because the checked
    // prop is set to true
    expect(checkbox.checked).toBe(true);
  });
});
