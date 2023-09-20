import { styled } from 'styled-components';
import { ColorKey } from '../types';

interface IllustratedIconWrapperProps {
  $isClickable?: boolean;
  $size?: number;
  $primaryColor?: ColorKey;
  $secondaryColor?: ColorKey;
  $primaryColorHover?: ColorKey;
  $secondaryColorHover?: ColorKey;
}

export const IllustratedIconWrapper = styled.span<IllustratedIconWrapperProps>(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ({ $size, $primaryColor, $secondaryColor, $primaryColorHover, $secondaryColorHover, theme }) => ({
    outline: 'none',
    pointerEvents: 'none',
    cursor: 'initial',

    '&[data-focus-visible-added]:focus': {
      boxShadow: '$focus',
      zIndex: 1,
    },

    height: $size,

    svg: {
      path: {
        '&:first-of-type': {
          fill: $primaryColor ? theme.colors[$primaryColor] : theme.colors.neutral300,
        },

        '&:last-of-type': {
          fill: $secondaryColor ? theme.colors[$secondaryColor] : theme.colors.neutral600,
        },
      },
    },

    '&:hover': {
      svg: {
        path: {
          '&:first-of-type': {
            fill: $primaryColorHover ? theme.colors[$primaryColorHover] : theme.colors.neutral400,
          },

          '&:last-of-type': {
            fill: $secondaryColorHover
              ? theme.colors[$secondaryColorHover]
              : theme.colors.neutral700,
          },
        },
      },
    },
  }),

  ({ $isClickable }) => {
    if ($isClickable) {
      return {
        cursor: 'pointer',
        pointerEvents: 'initial',
      };
    }
  },
);
