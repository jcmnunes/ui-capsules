import React, { FC } from 'react';
import { ICONIS } from './Iconis.constants';
import { IconisType } from '../types';

interface Props {
  icon: IconisType;
  size?: string;
  primaryColor?: string;
  secondaryColor?: string;
  className?: string;
}

export const Iconis: FC<Props> = ({ icon, size, primaryColor, secondaryColor, className }) => (
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
      d={ICONIS[icon][0]}
      data-testid="first-path"
    />
    <path
      fill={secondaryColor}
      className="ui-capsules-icon-secondary"
      d={ICONIS[icon][1]}
      data-testid="second-path"
    />
  </svg>
);
Iconis.displayName = 'Iconis';

Iconis.defaultProps = {
  size: '24px',
  primaryColor: 'currentColor',
  secondaryColor: 'currentColor',
  className: '',
};
