import React, { ComponentPropsWithoutRef } from 'react';
import { useTheme } from 'styled-components';
import { Text } from '../Text/Text';

type LabelVariant = 'success' | 'error';

export interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  id?: string;
  variant?: LabelVariant;
  labelId?: string;
}

export const Label: React.FC<LabelProps> = ({ labelId, variant, children, ...rest }) => {
  const theme = useTheme();
  const color =
    variant === 'success'
      ? theme.colors.success700
      : variant === 'error'
      ? theme.colors.error700
      : theme.colors.neutral600;

  return (
    <Text as="label" variant="label" htmlFor={labelId} color={color} {...rest}>
      {children}
    </Text>
  );
};
