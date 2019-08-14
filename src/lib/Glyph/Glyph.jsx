/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const icons = {
  success:
    'M14 3c-.28 0-.53.11-.71.29L6 10.59l-3.29-3.3C2.53 7.11 2.28 7 2 7c-.55 0-1 .45-1 1 0 .28.11.53.29.71l4 4c.18.18.43.29.71.29s.53-.11.71-.29l8-8c.18-.18.29-.43.29-.71 0-.55-.45-1-1-1z',
  warning:
    'M15.84 13.5l.01-.01-7-12-.01.01c-.17-.3-.48-.5-.85-.5s-.67.2-.85.5l-.01-.01-7 12 .01.01c-.09.15-.15.31-.15.5 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 0-.19-.06-.35-.15-.5zm-6.85-.51h-2v-2h2v2zm0-3h-2v-5h2v5z',
  error:
    'M7.99-.01c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13h-2v-2h2v2zm0-3h-2v-7h2v7z',
  copy: 'M5 4v10h8V4zm7 9H6V5h6zM11 2v1H4v9H3V2z',
};

const Glyph = ({ color, size, icon }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
    <path fill={color} d={icons[icon]} />
  </svg>
);

Glyph.defaultProps = {
  size: 16,
  color: '#FFF',
};

Glyph.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Glyph;
