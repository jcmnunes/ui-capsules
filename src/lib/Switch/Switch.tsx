import React, { FC } from 'react';
import RSwitch from 'react-switch';
import styled from 'styled-components';
import { theme } from '../theme';
import { Size } from '../types';

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LabelText = styled.span<{ isDisabled?: boolean; size: Size }>`
  font-size: ${({ size }) => (size === 'large' ? '18px' : '16px')};
  margin-left: 8px;
  color: ${({ isDisabled }) => isDisabled && theme.neutral200};
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

const COLOR = {
  success: theme.green500,
  primary: theme.blue500,
};

interface Props {
  checked: boolean;
  onChange(): void;
  isDisabled?: boolean;
  children?: string;
  size?: Size;
  appearance?: 'primary' | 'success';
}

export const Switch: FC<Props> = ({
  checked,
  onChange,
  size = 'medium',
  appearance = 'success',
  isDisabled,
  children,
}) => {
  return (
    <Label>
      <RSwitch
        key={size}
        checked={checked}
        onChange={onChange}
        disabled={isDisabled}
        width={DIMENSIONS[size].width}
        height={DIMENSIONS[size].height}
        handleDiameter={DIMENSIONS[size].diameter}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor={COLOR[appearance]}
        offColor={theme.neutral300}
      />
      {!!children && (
        <LabelText isDisabled={isDisabled} size={size}>
          {children}
        </LabelText>
      )}
    </Label>
  );
};
Switch.displayName = 'Switch';

Switch.defaultProps = {
  appearance: 'success',
  size: 'medium',
};
