import React from 'react';
import RSelect, { Props as RSelectProps, Styles, Theme as RSTheme } from 'react-select';
import { theme } from '../theme';

type Size = 'medium' | 'large';

// interface StyledSelectProps {
//   size: Size;
// }
// const StyledSelect = styled(RSelect)<StyledSelectProps>`
//   width: 100%;
//   font-size: ${({ size }) => dimensions[size].fontSize};
//
//   // This hack is needed to avoid the cursor being in front of the placeholder
//   // https://stackoverflow.com/questions/52865076/react-select-async-places-the-cursorcaret-at-the-end-of-the-placeholder-when-i
//   .react-select__placeholder {
//     color: ${theme.neutral200};
//   }
// `;

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

const customStyles = (size: Size): Partial<Styles> => ({
  container: (provided: React.CSSProperties) => ({
    ...provided,
    width: '100%',
    fontSize: dimensions[size].fontSize,
  }),
  control: (provided: React.CSSProperties, state) => ({
    ...provided,
    boxShadow: state.isFocused ? `0 0 0 3px ${theme.blue200}` : 'none',
    cursor: state.isDisabled ? 'not-allowed' : 'pointer',
    border: state.isFocused ? `1px solid ${theme.blue400}` : `1px solid ${theme.neutral200}`,
    ':hover': {
      border: `1px solid ${theme.neutral300}`,
    },
    width: '100%',
  }),
  option: (provided: React.CSSProperties, state) => ({
    ...provided,
    cursor: 'pointer',
    color: theme.neutral600,
    // eslint-disable-next-line no-nested-ternary
    background: state.isSelected ? theme.blue050 : state.isFocused ? theme.neutral075 : '#fff',
    ':hover': {
      background: state.isSelected ? theme.blue050 : theme.neutral075,
    },
  }),
  singleValue: (provided: React.CSSProperties, state) => ({
    ...provided,
    color: state.isDisabled ? theme.neutral300 : theme.neutral600,
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

export const customTheme = (rsTheme: RSTheme, size: Size) => ({
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

interface Props<T> extends RSelectProps<T> {
  size?: 'medium' | 'large';
}

export function Select<T>({ size = 'medium', ...other }: Props<T>) {
  return (
    <RSelect
      size={size}
      styles={customStyles(size)}
      theme={rsTheme => customTheme(rsTheme, size)}
      classNamePrefix="react-select"
      // style={{
      //   width: '100%',
      //   fontSize: dimensions[size].fontSize,
      //
      //   // // This hack is needed to avoid the cursor being in front of the placeholder
      //   // // https://stackoverflow.com/questions/52865076/react-select-async-places-the-cursorcaret-at-the-end-of-the-placeholder-when-i
      //   // '.react-select__placeholder': {
      //   //   color: theme.neutral200,
      //   // },
      // }}
      {...other}
    />
  );
}
Select.displayName = 'Select';

Select.defaultProps = {
  size: 'medium',
};
