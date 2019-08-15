import React from 'react';
import PropTypes from 'prop-types';
import RSelect from 'react-select';
import styled from 'styled-components';
import theme from '../theme';

const StyledSelect = styled(RSelect)`
  width: 100%;
  font-size: ${props => dimensions[props.size].fontSize};
`;

const dimensions = {
  medium: {
    baseUnit: 2,
    minHeight: 32,
    fontSize: '16px',
  },
  large: {
    baseUnit: 4,
    minHeight: 48,
    fontSize: '18px',
  },
};

const customStyles = size => ({
  control: (provided, state) => ({
    ...provided,
    boxShadow: state.isFocused ? `0 0 0 2px ${theme.blue100}` : 'none',
    cursor: state.isDisabled ? 'not-allowed' : 'pointer',
    border: `1px solid ${theme.neutral200}`,
    ':hover': {
      border: `1px solid ${theme.neutral300}`,
    },
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    color: theme.neutral600,
    // eslint-disable-next-line no-nested-ternary
    background: state.isSelected ? theme.blue050 : state.isFocused ? theme.neutral075 : '#fff',
    ':hover': {
      background: state.isSelected ? theme.blue050 : theme.neutral075,
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.isDisabled ? theme.neutral300 : theme.neutral600,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: size === 'medium' ? '1px 8px' : '2px 12px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
});

export const customTheme = (rsTheme, size) => ({
  ...rsTheme,
  spacing: {
    ...rsTheme.spacing,
    controlHeight: dimensions[size].minHeight,
    baseUnit: dimensions[size].baseUnit,
  },
  colors: {
    ...rsTheme.colors,
    primary: theme.blue600,
    primary75: theme.blue300,
    primary50: theme.blue100,
    primary25: theme.blue050,

    danger: theme.red600,
    dangerLight: theme.red100,

    neutral0: 'hsl(0, 0%, 100%)',
    neutral5: theme.neutral050,
    neutral10: theme.neutral100,
    neutral20: theme.neutral200,
    neutral30: theme.neutral300,
    neutral40: theme.neutral400,
    neutral50: theme.neutral500,
    neutral60: theme.neutral600,
    neutral70: theme.neutral700,
    neutral80: theme.neutral800,
    neutral90: theme.neutral900,
  },
});

const Select = ({ size, ...other }) => {
  return (
    <StyledSelect
      size={size}
      styles={customStyles(size)}
      theme={rsTheme => customTheme(rsTheme, size)}
      {...other}
    />
  );
};
Select.displayName = 'Select';

Select.defaultProps = {
  size: 'medium',
};

Select.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']),
};

export default Select;
