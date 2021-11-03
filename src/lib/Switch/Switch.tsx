import React, { FC } from 'react';
import RSwitch, { ReactSwitchProps } from 'react-switch';
import { colors } from '../colors';
import { styled } from '../stitches.config';
import { CSSProp, DualSize } from '../types';

const Label = styled('label', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const LabelText = styled('span', {
  fontSize: '$2',
  fontWeight: 500,
  marginLeft: '$2',
  color: '$neutral700',

  variants: {
    disabled: {
      true: {
        color: '$neutral400',
      },
    },
  },
});

const DIMENSIONS = {
  medium: {
    width: 32,
    height: 16,
    diameter: 12,
  },

  large: {
    width: 48,
    height: 24,
    diameter: 20,
  },
};

interface SwitchProps extends Pick<ReactSwitchProps, 'checked' | 'onChange'>, CSSProp {
  disabled?: boolean;
  children?: string;
  size?: DualSize;
}

export const Switch: FC<SwitchProps> = ({
  checked,
  onChange,
  size = 'medium',
  disabled,
  children,
  ...rest
}) => {
  return (
    <Label {...rest}>
      <RSwitch
        key={size}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        width={DIMENSIONS[size].width}
        height={DIMENSIONS[size].height}
        handleDiameter={DIMENSIONS[size].diameter}
        onColor={colors.blue500}
        offColor={colors.gray500}
        {...rest}
      />

      {!!children && <LabelText disabled={disabled}>{children}</LabelText>}
    </Label>
  );
};

Switch.displayName = 'Switch';
Switch.defaultProps = {
  size: 'medium',
};
