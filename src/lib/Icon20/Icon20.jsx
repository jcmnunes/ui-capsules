import React from 'react';
import PropTypes from 'prop-types';
import { ICONS } from './Icon20.constants';

const sizes = {
  small: '16px',
  medium: '20px',
  large: '24px',
};

const Icon20 = ({ icon, size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={sizes[size]} viewBox="0 0 20 20">
    <path fill="currentColor" d={ICONS[icon]} />
  </svg>
);
Icon20.displayName = 'Icon20';

Icon20.defaultProps = {
  size: 'medium',
};

Icon20.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.string.isRequired,
};

export default Icon20;
