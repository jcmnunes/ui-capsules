import React from 'react';
import RSelect, { Props as RSelectProps, Styles, Theme as RSTheme } from 'react-select';
import { MarginProps } from '../styledProps';
import { useTheme } from '@emotion/react';
import { Theme } from '../types';

type Size = 'medium' | 'large';

const dimensions = {
  medium: {
    baseUnit: 2,
    minHeight: 32,
    fontSize: '14px',
  },
  large: {
    baseUnit: 4,
    minHeight: 48,
    fontSize: '16px',
  },
};

const customStyles = (size: Size, theme: Theme): Partial<Styles> => ({
  container: (provided: React.CSSProperties) => ({
    ...provided,
    width: '100%',
    fontSize: dimensions[size].fontSize,
    fontWeight: 500,
  }),

  control: (provided: React.CSSProperties, state) => ({
    ...provided,
    boxShadow: state.isFocused ? `0 0 0 3px ${theme.colors.primary['200']}` : 'none',
    cursor: state.isDisabled ? 'not-allowed' : 'pointer',
    border: state.isFocused
      ? `1px solid ${theme.colors.primary['400']}`
      : `1px solid ${theme.colors.neutral['200']}`,
    ':hover': {
      border: `1px solid ${theme.colors.neutral['300']}`,
    },
    width: '100%',
  }),

  option: (provided: React.CSSProperties, state) => ({
    ...provided,
    cursor: 'pointer',
    color: theme.colors.neutral['600'],

    // eslint-disable-next-line no-nested-ternary
    background: state.isSelected
      ? theme.colors.primary['50']
      : state.isFocused
      ? theme.colors.neutral['50']
      : '#fff',

    ':hover': {
      background: state.isSelected ? theme.colors.primary['50'] : theme.colors.neutral['50'],
    },
  }),

  singleValue: (provided: React.CSSProperties, state) => ({
    ...provided,
    color: state.isDisabled ? theme.colors.neutral['300'] : theme.colors.neutral['600'],
  }),

  valueContainer: (provided: React.CSSProperties) => ({
    ...provided,
    padding: size === 'medium' ? '1px 8px' : '2px 12px',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  menuPortal: (base: React.CSSProperties) => ({
    ...base,
    zIndex: theme.zIndices.select,
  }),
});

export const customTheme = (rsTheme: RSTheme, size: Size, theme: Theme) => ({
  ...rsTheme,

  spacing: {
    ...rsTheme.spacing,
    controlHeight: dimensions[size].minHeight,
    baseUnit: dimensions[size].baseUnit,
  },

  colors: {
    ...rsTheme.colors,
    primary: theme.colors.primary['600'],
    primary75: theme.colors.primary['300'],
    primary50: theme.colors.primary['100'],
    primary25: theme.colors.primary['50'],

    danger: theme.colors.error['600'],
    dangerLight: theme.colors.error['100'],

    neutral0: 'hsl(0, 0%, 100%)',
    neutral5: theme.colors.neutral['50'],
    neutral10: theme.colors.neutral['100'],
    neutral20: theme.colors.neutral['200'],
    neutral30: theme.colors.neutral['300'],
    neutral40: theme.colors.neutral['400'],
    neutral50: theme.colors.neutral['500'],
    neutral60: theme.colors.neutral['600'],
    neutral70: theme.colors.neutral['700'],
    neutral80: theme.colors.neutral['800'],
    neutral90: theme.colors.neutral['900'],
  },
});

interface Props<T> extends RSelectProps<T>, MarginProps {
  size?: 'medium' | 'large';
}

export function Select<T>({ size = 'medium', ...rest }: Props<T>) {
  const theme = useTheme();

  return (
    <RSelect
      size={size}
      styles={customStyles(size, theme)}
      theme={(rsTheme: RSTheme) => customTheme(rsTheme, size, theme)}
      classNamePrefix="react-select"
      {...rest}
    />
  );
}

Select.displayName = 'Select';
Select.defaultProps = {
  size: 'medium',
};
