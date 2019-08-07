import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHead = styled.thead`
  text-align: left;
  border-bottom: 1px solid ${props => props.theme.neutral200};
  font-weight: 700;
  color: ${props => props.theme.neutral300};
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

const Head = ({ children }) => {
  return (
    <StyledHead>
      <tr>{children}</tr>
    </StyledHead>
  );
};

Head.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Head;
