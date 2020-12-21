import React, { ComponentPropsWithoutRef, forwardRef, MouseEvent } from 'react';
import { illustratedIcons } from './IllustratedIcon.constants';
import { IllustratedIconType } from '../types';
import { MarginProps } from '../styledProps';
import { IllustratedIconWrapper } from './IllustratedIcon.styles';

interface IllustratedIconProps extends ComponentPropsWithoutRef<'button'>, MarginProps {
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
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        primaryColorHover={primaryColorHover}
        secondaryColorHover={secondaryColorHover}
        size={size}
        tabIndex={onClick ? 0 : -1}
        {...rest}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
          <path
            fill={primaryColor}
            className="ui-capsules-icon-primary"
            d={illustratedIcons[icon][0]}
            data-testid="first-path"
          />
          <path
            fill={secondaryColor}
            className="ui-capsules-icon-secondary"
            d={illustratedIcons[icon][1]}
            data-testid="second-path"
          />
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
