import React, { ComponentType } from 'react';
import { Text } from '../../Text/Text';
import { styled } from '../../stitches.config';
import { OptionProps } from 'react-select/dist/declarations/src/components/Option';

const OptionWrapper = styled('div', {
  display: 'flex',
  cursor: 'pointer',
  fontWeight: 500,
  color: '$neutral700',
  background: '$bg',
  height: 'auto',

  variants: {
    isFocused: {
      true: {
        background: '$neutral200',
      },
    },
  },
});

export const Option: ComponentType<OptionProps<{ label: string }>> = ({
  innerProps,
  isFocused,
  innerRef,
  data,
}) => {
  const { label } = data;

  return (
    <OptionWrapper isFocused={isFocused} ref={innerRef as any} {...innerProps} css={{ p: '$2' }}>
      <Text css={{ fontWeight: 500, lineHeight: '$2' }}>{label}</Text>
    </OptionWrapper>
  );
};
