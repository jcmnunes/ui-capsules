import React from 'react';
import PropTypes from 'prop-types';
import { ICONS } from './Icon.constants';

const Icon = ({ icon, size, primaryColor, secondaryColor, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
  >
    <path fill={primaryColor} className="primary" d={ICONS[icon][0]} data-testid="first-path" />
    <path
      fill={secondaryColor}
      className="secondary"
      d={ICONS[icon][1]}
      data-testid="second-path"
    />
  </svg>
);
Icon.displayName = 'Icon';

Icon.defaultProps = {
  size: '24px',
  primaryColor: 'currentColor',
  secondaryColor: 'currentColor',
  className: '',
};

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(ICONS)).isRequired,
  size: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
