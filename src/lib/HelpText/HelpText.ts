import { styled } from 'styled-components';

interface HelpTextProps {
  variant?: 'success' | 'error';
}

export const HelpText = styled.div<HelpTextProps>(
  ({ theme }) => ({
    fontSize: theme.fontSizes.sm,
    lineHeight: theme.lineHeights.sm,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 4,
  }),

  ({ theme, variant }) => {
    switch (variant) {
      case 'success':
        return {
          color: theme.colors.success600,
        };
      case 'error':
        return {
          color: theme.colors.error700,
        };
      default:
        return {
          color: theme.colors.neutral500,
        };
    }
  },
);
