import React, { ComponentType } from 'react';
import { Text } from '../../Text/Text';
import { OptionProps } from 'react-select/dist/declarations/src/components/Option';
import { styled } from 'styled-components';

interface OptionWrapperProps {
  isFocused: boolean;
}

const OptionWrapper = styled.div<OptionWrapperProps>(({ theme, isFocused }) => ({
  display: 'flex',
  cursor: 'pointer',
  fontWeight: 500,
  color: theme.colors.neutral700,
  background: isFocused ? theme.colors.neutral200 : theme.colors.bg,
  height: 'auto',
  padding: theme.space[8],
}));

export const Option: ComponentType<OptionProps<{ label: string }>> = ({
  innerProps,
  isFocused,
  innerRef,
  data,
}) => {
  const { label } = data;

  return (
    <OptionWrapper isFocused={isFocused} ref={innerRef as any} {...innerProps}>
      <Text css={{ fontWeight: 500 }}>{label}</Text>
    </OptionWrapper>
  );
};
