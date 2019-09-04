import React from 'react';
import PropTypes from 'prop-types';
import { ICONS } from './Icon16.constants';

const Icon16 = ({ icon }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 16 16">
    <path fill="currentColor" d={ICONS[icon]} />
  </svg>
);
Icon16.displayName = 'Icon16';

Icon16.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon16;
