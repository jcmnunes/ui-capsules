import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../theme';

export const StyledPill = styled.span`
  font-size: 8px;
  border-radius: 999px;
  border: 1px solid ${theme.pink600};
  background-color: ${theme.pink050};
  color: ${theme.pink600};
  padding: 0 4px;
  text-transform: uppercase;
  font-weight: 600;
`;

interface Props {}

export const Pill: React.FC<Props> = ({ children }) => <StyledPill>{children}</StyledPill>;
Pill.displayName = 'Pill';

Pill.propTypes = {
  children: PropTypes.string.isRequired,
};
