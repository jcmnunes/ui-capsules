import React from 'react';
import RSelect, { Props as RSelectProps, Styles, Theme as RSTheme } from 'react-select';
import { useTheme } from '@emotion/react';
import { MarginProps } from '../styledProps';
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

const customStyles = (size: Size, theme: Theme): Partial<Styles<any, any>> => ({
  container: provided => ({
    ...provided,
    width: '100%',
    fontSize: dimensions[size].fontSize,
    fontWeight: 400,
  }),

  control: (provided, state) => ({
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

  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    color: theme.colors.neutral['600'],
    fontWeight: 500,
    background: state.isFocused ? theme.colors.neutral['100'] : theme.colors.bg,
  }),

  singleValue: (provided, state) => ({
    ...provided,
    color: state.isDisabled ? theme.colors.neutral['300'] : theme.colors.neutral['600'],
  }),

  valueContainer: provided => ({
    ...provided,
    padding: size === 'medium' ? '1px 8px' : '2px 12px',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  menuPortal: base => ({
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

interface GroupType<OptionType> {
  options: OptionType[];

  [key: string]: any;
}

interface Props<OptionType, IsMulti extends boolean>
  extends RSelectProps<OptionType, IsMulti, GroupType<OptionType>>,
    MarginProps {
  size?: 'medium' | 'large';
}

export function Select<OptionType, IsMulti extends boolean = false>({
  size = 'medium',
  ...rest
}: Props<OptionType, IsMulti>) {
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
