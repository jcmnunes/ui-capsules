import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.neutral700};
    background: ${({ theme }) => theme.colors.bg};

    &.darkTheme {
      background: ${({ theme }) => theme.colors.bg};
    }
  }
`;
