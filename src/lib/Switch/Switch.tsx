import React, { FC } from 'react';
import RSwitch from 'react-switch';
import styled from '@emotion/styled/macro';
import { useTheme } from '@emotion/react';
import { ThemeColors } from '../theme';
import { ElementSize } from '../types';

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LabelText = styled.span<{ disabled?: boolean; size: ElementSize }>`
  font-size: ${({ size }) => (size === 'large' ? '18px' : '16px')};
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

interface Props {
  checked: boolean;
  onChange(): void;
  disabled?: boolean;
  children?: string;
  size?: ElementSize;
  variantColor?: ThemeColors;
}

export const Switch: FC<Props> = ({
  checked,
  onChange,
  size = 'medium',
  variantColor = 'primary',
  disabled,
  children,
}) => {
  const theme = useTheme();

  return (
    <Label>
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
        onColor={theme.colors[variantColor as keyof typeof theme.colors]['400']}
        offColor={theme.colors.neutral['300']}
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
  variantColor: 'primary',
  size: 'medium',
};
