import React, { ComponentPropsWithRef } from 'react';
import { CSSProp, DualSize } from '../types';
import { Text } from '../Text/Text';
import { Icons, LeftIcon, RightIcon, StyledSwitch, StyledToggle } from './Switch.styles';

export interface Props extends Omit<ComponentPropsWithRef<'input'>, 'size'>, CSSProp {
  children?: string;
  size?: DualSize;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Switch = React.forwardRef<HTMLInputElement, Props>(
  ({ children, size = 'large', checked, onChange, disabled, css, ...rest }, ref) => {
    return (
      <StyledToggle disabled={disabled} css={css}>
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

        {!!children && (
          <Text
            css={{ fontWeight: 500, color: disabled ? '$neutral500' : '$neutral700', ml: '$2' }}
          >
            {children}
          </Text>
        )}
      </StyledToggle>
    );
  },
);

Switch.displayName = 'Switch';
Switch.defaultProps = {
  size: 'large',
};
