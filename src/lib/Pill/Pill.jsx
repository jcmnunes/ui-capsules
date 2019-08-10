import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledPill = styled.span`
  font-size: 8px;
  border-radius: 999px;
  border: 1px solid ${props => props.theme.pink600};
  background-color: ${props => props.theme.pink050};
  color: ${props => props.theme.pink600};
  padding: 0 4px;
  text-transform: uppercase;
  font-weight: 600;
`;

const Pill = ({ children }) => {
  return <StyledPill>{children}</StyledPill>;
};

Pill.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Pill;
