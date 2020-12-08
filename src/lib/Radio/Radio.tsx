import React, { FC } from 'react';
import { ThemeColors } from '../theme';
import { ElementSize } from '../types';
import { MarginProps } from '../styledProps';
import { CustomRadio, Label, StyledInput } from './Radio.styles';
import { Wrapper } from '../Wrapper/Wrapper';

interface Props extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>, MarginProps {
  variantColor?: ThemeColors;
  size?: ElementSize;
}

export const Radio: FC<Props> = ({
  checked,
  onChange,
  size = 'small',
  variantColor = 'primary',
  disabled,
  children,
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <Label size={size} disabled={disabled}>
        {children}

        <StyledInput
          checked={checked}
          onChange={onChange}
          variantColor={variantColor}
          type="radio"
          disabled={disabled}
          {...rest}
        />

        <CustomRadio className="uic-custom-radio" size={size} disabled={disabled} />
      </Label>
    </Wrapper>
  );
};

Radio.displayName = 'Radio';
Radio.defaultProps = {
  variantColor: 'primary',
  size: 'small',
  disabled: false,
};
