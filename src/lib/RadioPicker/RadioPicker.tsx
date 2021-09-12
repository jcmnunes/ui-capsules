import React, { useState } from 'react';
import { Box, Text, Wrapper } from '..';
import { CustomRadio, StyledRadioInput } from '../Radio/Radio.styles';
import { MarginProps } from '../styledProps';
import { RadioPickerWrapper } from './RadioPicker.styles';

interface Props extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>, MarginProps {
  label: string;
  helpText?: string;
}

export const RadioPicker: React.FC<Props> = ({ checked, label, helpText, ...rest }) => {
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <Wrapper {...rest}>
      <RadioPickerWrapper as="label" checked={checked} hasFocus={hasFocus}>
        <Box position="relative" height={16}>
          <StyledRadioInput
            checked={checked}
            variantColor="primary"
            type="radio"
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
            {...rest}
          />

          <CustomRadio className="uic-custom-radio" size="small" />
        </Box>

        <Box display="flex" flexDirection="column" ml={26}>
          <Text fontWeight={500} color="inherit">
            {label}
          </Text>

          {!!helpText && (
            <Text fontSize="small" color={checked ? 'primary.600' : 'neutral.500'}>
              {helpText}
            </Text>
          )}
        </Box>
      </RadioPickerWrapper>
    </Wrapper>
  );
};

RadioPicker.displayName = 'RadioPicker';
RadioPicker.defaultProps = {
  helpText: '',
};
