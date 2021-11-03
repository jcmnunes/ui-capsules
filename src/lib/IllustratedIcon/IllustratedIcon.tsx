import React, { ComponentPropsWithoutRef, forwardRef, MouseEvent } from 'react';
import { illustratedIcons } from './IllustratedIcon.constants';
import { CSSProp, IllustratedIconType } from '../types';
import { IllustratedIconWrapper } from './IllustratedIcon.styles';

interface IllustratedIconProps extends ComponentPropsWithoutRef<'button'>, CSSProp {
  icon: IllustratedIconType;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
  primaryColorHover?: string;
  secondaryColorHover?: string;
}

export const IllustratedIcon = forwardRef<HTMLButtonElement, IllustratedIconProps>(
  (
    {
      icon,
      size = 24,
      onClick,
      primaryColor,
      secondaryColor,
      primaryColorHover,
      secondaryColorHover,
      ...rest
    },
    ref,
  ) => {
    return (
      <IllustratedIconWrapper
        ref={ref}
        as={!!onClick ? 'button' : 'span'}
        onClick={onClick ? onClick : () => {}}
        isClickable={!!onClick}
        tabIndex={onClick ? 0 : -1}
        {...rest}
        css={{
          height: size,
          ...rest?.css,

          svg: {
            path: {
              '&:first-of-type': {
                fill: primaryColor || '$neutral300',
              },

              '&:last-of-type': {
                fill: secondaryColor || '$neutral600',
              },
            },
          },

          '&:hover': {
            svg: {
              path: {
                '&:first-of-type': {
                  fill: primaryColorHover || '$neutral400',
                },

                '&:last-of-type': {
                  fill: secondaryColorHover || '$neutral700',
                },
              },
            },
          },
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
          <path fill={primaryColor} d={illustratedIcons[icon][0]} />
          <path fill={secondaryColor} d={illustratedIcons[icon][1]} />
        </svg>
      </IllustratedIconWrapper>
    );
  },
);

IllustratedIcon.displayName = 'IllustratedIcon';
IllustratedIcon.defaultProps = {
  size: 24,
  onClick: undefined,
};
