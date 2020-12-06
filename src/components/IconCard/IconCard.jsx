import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: ${({ theme }) => `1px solid ${theme.colors.neutral['200']}`};
  border-radius: 8px;
  overflow: hidden;
  color: ${({ theme }) => `1px solid ${theme.colors.neutral['700']}`};
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
  color: ${({ theme }) => `1px solid ${theme.colors.neutral['500']}`};
  background: ${({ theme }) => `1px solid ${theme.colors.neutral['50']}`};
  font-size: 14px;
  font-weight: 700;
  text-transform: lowercase;
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
