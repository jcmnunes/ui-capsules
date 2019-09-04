import React from 'react';
import PropTypes from 'prop-types';
import { ICONS } from './Icon20.constants';

const Icon20 = ({ icon, size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
    <path fill="currentColor" d={ICONS[icon]} />
  </svg>
);
Icon20.displayName = 'Icon20';

Icon20.defaultProps = {
  size: '20px',
};

Icon20.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Icon20;
