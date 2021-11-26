import React from 'react';
import { Text } from '../../Text/Text';
import { styled } from '../../stitches.config';

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

export const Option: React.FC<any> = ({ innerProps, isFocused, innerRef, data }) => {
  const { label } = data;

  return (
    <OptionWrapper isFocused={isFocused} ref={innerRef} {...innerProps} css={{ p: '$2' }}>
      <Text css={{ fontWeight: 500, lineHeight: '$2' }}>{label}</Text>
    </OptionWrapper>
  );
};
