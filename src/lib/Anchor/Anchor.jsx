import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Anchor = ({ href, children, ...other }) => {
  return (
    <Button href={href} as="a" appearance="link" {...other}>
      {children}
    </Button>
  );
};
Anchor.displayName = 'Anchor';

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Anchor;
