import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { Box } from '../Box/Box';
import { DualSize } from '../types';
import { CustomCheckbox, Label, StyledInput } from './Checkbox.styles';

export interface Props extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  size?: DualSize;
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  (
    { checked, size = 'medium', disabled = false, children, onChange, className, style, ...rest },
    ref,
  ) => (
    <Box className={className} style={style}>
      <Label $size={size} onClick={e => e.stopPropagation()} $disabled={disabled}>
        {children && <span>{children}</span>}

        <StyledInput
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />

        <CustomCheckbox className="uic-custom-checkbox" $size={size} $disabled={disabled} />
      </Label>
    </Box>
  ),
);

Checkbox.displayName = 'Checkbox';
Checkbox.defaultProps = {
  size: 'medium',
  disabled: false,
};
