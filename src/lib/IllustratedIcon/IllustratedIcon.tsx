import React, { ComponentPropsWithoutRef, forwardRef, MouseEvent } from 'react';
import { illustratedIcons } from './IllustratedIcon.constants';
import { ColorKey, IllustratedIconType } from '../types';
import { IllustratedIconWrapper } from './IllustratedIcon.styles';

export interface Props extends ComponentPropsWithoutRef<'button'> {
  icon: IllustratedIconType;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  size?: number;
  primaryColor?: ColorKey;
  secondaryColor?: ColorKey;
  primaryColorHover?: ColorKey;
  secondaryColorHover?: ColorKey;
}

export const IllustratedIcon = forwardRef<HTMLButtonElement, Props>(
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
        as={onClick ? 'button' : 'span'}
        onClick={onClick ? onClick : () => {}}
        $isClickable={!!onClick}
        $size={size}
        $primaryColor={primaryColor}
        $secondaryColor={secondaryColor}
        $primaryColorHover={primaryColorHover}
        $secondaryColorHover={secondaryColorHover}
        tabIndex={onClick ? 0 : -1}
        {...rest}
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
