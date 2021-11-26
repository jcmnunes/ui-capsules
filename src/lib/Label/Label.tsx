import React from 'react';
import { Text } from '../Text/Text';
import { CSSProp } from '../types';

type LabelVariant = 'success' | 'error';

export interface LabelProps extends CSSProp {
  id?: string;
  variant?: LabelVariant;
  labelId?: string;
}

export const Label: React.FC<LabelProps> = ({ labelId, variant, children, css, ...rest }) => {
  return (
    <Text
      as="label"
      variant="label"
      htmlFor={labelId}
      css={{
        color:
          variant === 'success' ? '$success700' : variant === 'error' ? '$error700' : '$neutral600',
        ...css,
      }}
      {...rest}
    >
      {children}
    </Text>
  );
};
