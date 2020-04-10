import React, { FC } from 'react';
import { illustratedIcons } from './IllustratedIcon.constants';
import { IllustratedIconType } from '../types';

interface Props {
  icon: IllustratedIconType;
  size?: string;
  primaryColor?: string;
  secondaryColor?: string;
  className?: string;
}

export const IllustratedIcon: FC<Props> = ({
  icon,
  size,
  primaryColor,
  secondaryColor,
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
  >
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
);
IllustratedIcon.displayName = 'IllustratedIcon';

IllustratedIcon.defaultProps = {
  size: '24px',
  primaryColor: 'currentColor',
  secondaryColor: 'currentColor',
  className: '',
};
