import React from 'react';
import { ICONS } from './Icon16.constants';

interface Props {
  icon: keyof typeof ICONS;
}

export const Icon16: React.FC<Props> = ({ icon }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 16 16">
    <path fill="currentColor" d={ICONS[icon]} />
  </svg>
);
Icon16.displayName = 'Icon16';
