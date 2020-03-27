import React from 'react';
import { ICONS } from './Icon.constants';

interface Props {
  icon: keyof typeof ICONS;
  size?: string;
}

export const Icon: React.FC<Props> = ({ icon, size = '24px' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={ICONS[icon]}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
Icon.displayName = 'Icon';

Icon.defaultProps = {
  size: '24px',
};
