import React, { FC } from 'react';
import { Box } from '../Box/Box';
import { DualSize } from '../types';
import { CustomRadio, Label, StyledRadioInput } from './Radio.styles';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  size?: DualSize;
}

export const Radio: FC<Props> = ({
  checked,
  onChange,
  size = 'medium',
  disabled,
  children,
  className,
  style,
  ...rest
}) => {
  return (
    <Box className={className} style={style}>
      <Label $size={size} $disabled={disabled}>
        {children}

        <StyledRadioInput
          checked={checked}
          onChange={onChange}
          type="radio"
          disabled={!!disabled}
          {...rest}
        />

        <CustomRadio className="uic-custom-radio" $size={size} $disabled={disabled} />
      </Label>
    </Box>
  );
};

Radio.displayName = 'Radio';
Radio.defaultProps = {
  size: 'medium',
  disabled: false,
};
