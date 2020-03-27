import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../lib/theme';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.neutral200};
  border-radius: 8px;
  overflow: hidden;
  color: ${theme.neutral700};
  width: 132px;
  height: 100px;
  margin-bottom: 24px;
  margin-right: ${props => (props.isLastInRow ? 0 : '24px')};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Label = styled.div`
  color: ${theme.neutral500};
  background: ${theme.neutral050};
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const IconCard = ({ label, isLastInRow, children }) => {
  return (
    <Card isLastInRow={isLastInRow}>
      <Icon>{children}</Icon>
      <Label>{label}</Label>
    </Card>
  );
};

IconCard.defaultProps = {
  isLastInRow: false,
};

IconCard.propTypes = {
  label: PropTypes.string.isRequired,
  isLastInRow: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

export default IconCard;
