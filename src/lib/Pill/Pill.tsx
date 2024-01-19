import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

export const StyledPill = styled.span(({ theme }) => ({
  fontSize: '8px',
  borderRadius: theme.radii.full,
  border: `1px solid ${theme.colors.secondary600}`,
  backgroundColor: theme.colors.secondary50,
  color: theme.colors.secondary600,
  padding: '0 4px',
  textTransform: 'uppercase',
  fontWeight: 600,
}));

export const Pill: FC = ({ children }) => <StyledPill>{children}</StyledPill>;

Pill.displayName = 'Pill';
Pill.propTypes = {
  children: PropTypes.string.isRequired,
};
