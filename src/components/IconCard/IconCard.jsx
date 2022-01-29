import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '../../lib';

const Card = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid $neutral200`,
  borderRadius: '$large',
  overflow: 'hidden',
  color: `1px solid $neutral700`,
  width: 132,
  height: 100,
  marginBottom: 24,
  marginRight: 24,

  variants: {
    isLastInRow: {
      true: {
        marginRight: 0,
      },
    },
  },
});

const Icon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
});

const Label = styled('div', {
  color: '$neutral600',
  background: '$neutral100 ',
  fontSize: '$xs',
  fontWeight: 600,
  textTransform: 'lowercase',
  height: 30,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

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
