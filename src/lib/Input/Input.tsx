import React from 'react';
import { CSSProp, ElementSize, IconType, IconVariant } from '../types';
import { Icon } from '../Icon/Icon';
import { Label } from '../Label/Label';
import {
  IconWrapper,
  InputWrapper,
  StyledInput,
  InputIcon,
  InputVariant,
  Wrapper,
} from './Input.styles';
import { useId } from '@reach/auto-id';
import { HelpText } from '../HelpText/HelpText';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>, CSSProp {
  size?: ElementSize;
  disabled?: boolean;
  label?: string;
  helpText?: string;
  variant?: InputVariant;
  leftIcon?: IconType;
  rightIcon?: IconType;
  iconVariant?: IconVariant;
}

export const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      size = 'medium',
      label,
      helpText,
      variant,
      disabled = false,
      leftIcon,
      rightIcon,
      iconVariant,
      id,
      css,
      ...rest
    },
    ref,
  ) => {
    const labelId = useId(id);
    const descriptionId = useId();

    return (
      <Wrapper css={css}>
        {label && (
          <Label labelId={labelId} variant={variant} css={{ mb: '$1' }}>
            {label}
          </Label>
        )}

        <InputWrapper {...rest}>
          {leftIcon && (
            <IconWrapper size={size} position="left">
              <InputIcon
                as={Icon}
                variant={iconVariant}
                icon={leftIcon}
                size={size === 'small' ? 18 : 20}
              />
            </IconWrapper>
          )}

          <StyledInput
            id={labelId}
            ref={ref}
            inputSize={size}
            variant={variant}
            hasLeftIcon={!!leftIcon}
            hasRightIcon={!!rightIcon}
            disabled={disabled}
            aria-describedby={helpText ? descriptionId : undefined}
            aria-invalid={variant === 'error'}
            aria-errormessage={variant === 'error' ? helpText : undefined}
            {...rest}
          />

          {rightIcon && (
            <IconWrapper size={size}>
              <InputIcon
                as={Icon}
                variant={iconVariant}
                icon={rightIcon}
                size={size === 'small' ? 18 : 20}
              />
            </IconWrapper>
          )}

          {helpText && (
            <HelpText id={descriptionId} variant={variant}>
              {helpText}
            </HelpText>
          )}
        </InputWrapper>
      </Wrapper>
    );
  },
);

Input.displayName = 'Input';
Input.defaultProps = {
  size: 'medium',
  disabled: false,
  variant: undefined,
  leftIcon: undefined,
  rightIcon: undefined,
  iconVariant: 'solid',
};
