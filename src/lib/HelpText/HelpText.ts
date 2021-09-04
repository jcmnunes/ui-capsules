import styled from '@emotion/styled';
import { variant } from 'styled-system';
import { ColorProps, MarginProps } from '../styledProps';
import { InputVariant } from '../Input/Input.styles';

interface HelpTextProps extends MarginProps {
  variant?: InputVariant;
}

export const HelpText = styled.div<HelpTextProps>(
  ({ theme }) => ({
    fontSize: theme.fontSizes.small,
    lineHeight: theme.lineHeights.small,
    color: theme.colors.neutral['500'],
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 4,
  }),

  variant<ColorProps, InputVariant>({
    prop: 'variant',
    variants: {
      success: {
        color: 'success.600',
      },
      error: {
        color: 'error.700',
      },
    },
  }),
);
