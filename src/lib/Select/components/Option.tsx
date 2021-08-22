import React from 'react';
import styled from '@emotion/styled';
import { Box, BoxProps } from '../../Box/Box';
import { Text } from '../../Text/Text';

interface OptionWrapperProps extends BoxProps {
  isFocused: boolean;
}

const OptionWrapper = styled(Box)<OptionWrapperProps>(({ isFocused, theme }) => ({
  display: 'flex',
  cursor: 'pointer',
  fontWeight: theme.fontWeights['500'],
  color: theme.colors.neutral['700'],
  background: isFocused ? theme.colors.neutral['200'] : theme.colors.bg,
  height: 'auto',
}));

export const Option: React.FC<any> = ({ innerProps, isFocused, innerRef, data }) => {
  const { label } = data;

  return (
    <OptionWrapper height="32px" p="8" isFocused={isFocused} ref={innerRef} {...innerProps}>
      <Text fontWeight={500}>{label}</Text>
    </OptionWrapper>
  );
};
