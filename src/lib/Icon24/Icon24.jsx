import React from 'react';
import PropTypes from 'prop-types';
import { ICONS } from './Icon24.constants';

const Icon24 = ({ icon, size, primaryColor, secondaryColor, className }) => (
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

Icon24.propTypes = {
  icon: PropTypes.oneOf(Object.keys(ICONS)).isRequired,
  size: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  className: PropTypes.string,
};

export default Icon24;
