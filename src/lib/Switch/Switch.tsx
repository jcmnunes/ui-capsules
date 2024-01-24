import React, { ComponentPropsWithRef } from 'react';
import { DualSize } from '../types';
import {
  Icons,
  LeftIcon,
  RightIcon,
  StyledText,
  StyledSwitch,
  StyledToggle,
} from './Switch.styles';

export interface Props extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  children?: string;
  size?: DualSize;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Switch = React.forwardRef<HTMLInputElement, Props>(
  ({ children, size = 'large', checked, onChange, disabled, className, style, ...rest }, ref) => {
    return (
      <StyledToggle disabled={disabled} className={className} style={style}>
        <input
          ref={ref}
          type="checkbox"
          onChange={onChange}
          checked={checked}
          disabled={disabled}
          {...rest}
        />
        <StyledSwitch size={size}>
          <Icons>
            <LeftIcon icon="check" size={size === 'medium' ? 12 : 16} />

            <RightIcon icon="x" size={size === 'medium' ? 12 : 16} />
          </Icons>
        </StyledSwitch>

        {!!children && <StyledText $disabled={disabled}>{children}</StyledText>}
      </StyledToggle>
    );
  },
);

Switch.displayName = 'Switch';
Switch.defaultProps = {
  size: 'large',
};
