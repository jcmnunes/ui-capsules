import React from 'react';
import { ICONS } from './Icon20.constants';

interface Props {
  icon: keyof typeof ICONS;
  size?: string;
}

export const Icon20: React.FC<Props> = ({ icon, size = '20px' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
    <path fill="currentColor" d={ICONS[icon]} />
  </svg>
);
Icon20.displayName = 'Icon20';

Icon20.defaultProps = {
  size: '20px',
};
