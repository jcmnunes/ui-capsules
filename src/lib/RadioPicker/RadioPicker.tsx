import React, { useState } from 'react';
import { Box, CSSProp, Flex, Text } from '..';
import { CustomRadio, StyledRadioInput } from '../Radio/Radio.styles';
import { RadioPickerWrapper } from './RadioPicker.styles';

interface Props extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>, CSSProp {
  label: string;
  helpText?: string;
}

export const RadioPicker: React.FC<Props> = ({ checked, label, helpText, css, ...rest }) => {
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <Box css={css}>
      <RadioPickerWrapper as="label" checked={checked} hasFocus={hasFocus}>
        <Box css={{ position: 'relative', height: 16 }}>
          <StyledRadioInput
            checked={checked}
            type="radio"
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
            {...rest}
          />

          <CustomRadio className="uic-custom-radio" />
        </Box>

        <Flex direction="column" css={{ ml: 30 }}>
          <Text css={{ fontWeight: 500, color: 'inherit' }}>{label}</Text>

          {!!helpText && (
            <Text size="sm" css={{ color: checked ? '$primary600' : '$neutral500' }}>
              {helpText}
            </Text>
          )}
        </Flex>
      </RadioPickerWrapper>
    </Box>
  );
};

RadioPicker.displayName = 'RadioPicker';
RadioPicker.defaultProps = {
  helpText: '',
};
