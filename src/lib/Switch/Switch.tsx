import React, { FC } from 'react';
import RSwitch, { ReactSwitchProps } from 'react-switch';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { ElementSize, VariantColor } from '../types';
import { margin } from 'styled-system';
import { MarginProps } from '../styledProps';

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${margin}
`;

const LabelText = styled.span<{ disabled?: boolean; size: ElementSize }>`
  font-size: ${({ size }) => (size === 'large' ? '16px' : '14px')};
  margin-left: 8px;
  color: ${({ disabled, theme }) => disabled && theme.colors.neutral['200']};
`;

const DIMENSIONS = {
  small: {
    width: 28,
    height: 16,
    diameter: 14,
  },

  medium: {
    width: 35,
    height: 20,
    diameter: 16,
  },

  large: {
    width: 50,
    height: 28,
    diameter: 24,
  },
};

interface SwitchProps extends Pick<ReactSwitchProps, 'checked' | 'onChange'>, MarginProps {
  disabled?: boolean;
  children?: string;
  size?: ElementSize;
  variantColor?: VariantColor;
}

export const Switch: FC<SwitchProps> = ({
  checked,
  onChange,
  size = 'medium',
  variantColor = 'green',
  disabled,
  children,
  ...rest
}) => {
  const theme = useTheme();

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
        uncheckedIcon={false}
        checkedIcon={false}
        onColor={theme.colors[variantColor as keyof typeof theme.colors]['500']}
        offColor={theme.colors.neutral['300']}
        {...rest}
      />

      {!!children && (
        <LabelText disabled={disabled} size={size}>
          {children}
        </LabelText>
      )}
    </Label>
  );
};

Switch.displayName = 'Switch';
Switch.defaultProps = {
  variantColor: 'green',
  size: 'medium',
};
