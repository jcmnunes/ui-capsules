import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const Card = styled.div(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${theme.colors.neutral200}`,
  borderRadius: theme.radii.large,
  overflow: 'hidden',
  color: `1px solid $neutral700`,
  width: 132,
  height: 100,
}));

const Icon = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
});

const Label = styled.div(({ theme }) => ({
  color: theme.colors.neutral600,
  background: theme.colors.neutral100,
  fontSize: theme.fontSizes.sm,
  fontWeight: 700,
  textTransform: 'lowercase',
  height: 30,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}));

const IconCard = ({ label, isLastInRow, children }) => {
  return (
    <Card $isLastInRow={isLastInRow}>
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
