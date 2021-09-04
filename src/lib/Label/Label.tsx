import React from 'react';
import { Text } from '../Text/Text';
import { MarginProps } from '../styledProps';

const colorMap = {
  success: 'success.700',
  error: 'error.700',
};

type LabelVariant = 'success' | 'error';

export interface LabelProps extends MarginProps {
  variant?: LabelVariant;
  labelId?: string;
}

export const Label: React.FC<LabelProps> = ({ labelId, variant, children, ...rest }) => {
  return (
    <Text
      as="label"
      variant="label"
      htmlFor={labelId}
      color={(variant && colorMap[variant]) || 'neutral.600'}
      {...rest}
    >
      {children}
    </Text>
  );
};
