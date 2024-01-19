import React, { useState } from 'react';
import { Box, Flex, Text } from '..';
import { CustomRadio, StyledRadioInput } from '../Radio/Radio.styles';
import { HelpText, RadioPickerWrapper } from './RadioPicker.styles';
import { CSSProp } from 'styled-components';

interface Props extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  label: string;
  helpText?: string;
  css?: CSSProp;
}

export const RadioPicker: React.FC<Props> = ({ checked, label, helpText, css, ...rest }) => {
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <Box css={css}>
      <RadioPickerWrapper $checked={checked} $hasFocus={hasFocus}>
        <Box style={{ position: 'relative', height: 16 }}>
          <StyledRadioInput
            checked={checked}
            type="radio"
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
            {...rest}
          />

          <CustomRadio $size="medium" className="uic-custom-radio" />
        </Box>

        <Flex $direction="column" style={{ marginLeft: 26 }}>
          <Text style={{ fontWeight: 500, color: 'inherit' }}>{label}</Text>

          {!!helpText && (
            <HelpText size="sm" checked={!!checked}>
              {helpText}
            </HelpText>
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
