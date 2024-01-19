import React, { FC } from 'react';
import { CSSProp } from 'styled-components';
import { Box } from '../Box/Box';
import { DualSize } from '../types';
import { CustomRadio, Label, StyledRadioInput } from './Radio.styles';

interface Props extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  size?: DualSize;
  css?: CSSProp;
}

export const Radio: FC<Props> = ({
  checked,
  onChange,
  size = 'medium',
  disabled,
  children,
  css,
  ...rest
}) => {
  return (
    <Box css={css}>
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
