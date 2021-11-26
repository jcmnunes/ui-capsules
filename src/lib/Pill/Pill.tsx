import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { styled } from '../stitches.config';

export const StyledPill = styled('span', {
  fontSize: '8px',
  borderRadius: '$full',
  border: '1px solid $secondary600',
  backgroundColor: '$secondary50',
  color: '$secondary600',
  padding: '0 4px',
  textTransform: 'uppercase',
  fontWeight: 600,
});

export const Pill: FC = ({ children }) => <StyledPill>{children}</StyledPill>;

Pill.displayName = 'Pill';
Pill.propTypes = {
  children: PropTypes.string.isRequired,
};
