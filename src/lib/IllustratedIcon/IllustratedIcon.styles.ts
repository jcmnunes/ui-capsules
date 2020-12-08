import styled from '@emotion/styled';

interface IllustratedIconWrapperProps {
  primaryColor?: string;
  secondaryColor?: string;
  primaryColorHover?: string;
  secondaryColorHover?: string;
  isClickable: boolean;
  size: string;
}

export const IllustratedIconWrapper = styled.button<IllustratedIconWrapperProps>`
  height: ${({ size }) => size};
  outline: none;
  pointer-events: ${({ isClickable }) => (isClickable ? 'auto' : 'none')};
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'initial')};

  svg {
    path {
      &:first-of-type {
        fill: ${({ primaryColor, theme }) => primaryColor || theme.colors.neutral['200']};
      }

      &:last-of-type {
        fill: ${({ secondaryColor, theme }) => secondaryColor || theme.colors.neutral['600']};
      }
    }
  }

  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.focus.boxShadow};
    z-index: 1;
  }

  &:hover {
    svg {
      path {
        &:first-of-type {
          fill: ${({ primaryColorHover, theme }) =>
            primaryColorHover || theme.colors.neutral['300']};
        }

        &:last-of-type {
          fill: ${({ secondaryColorHover, theme }) =>
            secondaryColorHover || theme.colors.neutral['700']};
        }
      }
    }
  }
`;
