import React from 'react';
import { ICONS } from './Icon24.constants';
import { Icon24Type } from '../typings';

interface Props {
  icon: Icon24Type;
  size?: string;
  primaryColor?: string;
  secondaryColor?: string;
  className?: string;
}

export const Icon24: React.FC<Props> = ({
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
      d={ICONS[icon][0]}
      data-testid="first-path"
    />
    <path
      fill={secondaryColor}
      className="ui-capsules-icon-secondary"
      d={ICONS[icon][1]}
      data-testid="second-path"
    />
  </svg>
);
Icon24.displayName = 'Icon';

Icon24.defaultProps = {
  size: '24px',
  primaryColor: 'currentColor',
  secondaryColor: 'currentColor',
  className: '',
};
