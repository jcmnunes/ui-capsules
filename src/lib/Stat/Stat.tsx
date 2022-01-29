import React from 'react';
import { Text } from '../Text/Text';
import { CSSProp } from '../types';
import { Box } from '../Box/Box';

interface Props extends CSSProp {
  label: string;
}

export const Stat: React.FC<Props> = ({ label, css, children }) => {
  return (
    <Box css={css}>
      <Text as="p" variant="smallCaps" css={{ mb: '$1' }}>
        {label}
      </Text>
      <Text as="p" size="xl" css={{ fontWeight: 500 }}>
        {children}
      </Text>
    </Box>
  );
};
