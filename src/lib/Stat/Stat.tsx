import React from 'react';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

interface Props {
  label: string;
}

export const Stat: React.FC<Props> = ({ label, children, ...rest }) => {
  return (
    <Box {...rest}>
      <Text as="p" variant="smallCaps" style={{ marginBottom: 4 }}>
        {label}
      </Text>
      <Text as="p" size="3xl" style={{ fontWeight: 500 }}>
        {children}
      </Text>
    </Box>
  );
};
