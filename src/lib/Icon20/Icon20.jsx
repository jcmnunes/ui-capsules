import React from 'react';
import PropTypes from 'prop-types';
import { ICONS } from './Icon20.constants';

const Icon20 = ({ icon }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20">
      <path fill="currentColor" d={ICONS[icon]} />
    </svg>
  );
};

Icon20.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon20;
