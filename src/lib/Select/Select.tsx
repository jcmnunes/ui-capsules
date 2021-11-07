import React from 'react';
import RSelect, { Props as RSelectProps, Styles, Theme as RSTheme } from 'react-select';
import { Option } from './components/Option';
import { Label } from '../Label/Label';
import { useId } from '@reach/auto-id';
import { Box } from '../Box/Box';
import { CSSProp } from '../types';
import { colors } from '../colors';
import { styled } from '../stitches.config';

type Size = 'medium' | 'large';

const dimensions = {
  medium: {
    baseUnit: 2,
    minHeight: 36,
    fontSize: '14px',
  },
  large: {
    baseUnit: 4,
    minHeight: 40,
    fontSize: '14px',
  },
};

const customStyles = (size: Size): Partial<Styles<any, any>> => ({
  container: provided => ({
    ...provided,
    width: '100%',
    fontSize: dimensions[size].fontSize,
    fontWeight: 400,
  }),

  valueContainer: provided => ({
    ...provided,
    padding: size === 'medium' ? '1px 8px' : '2px 12px',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  dropdownIndicator: provided => ({
    ...provided,
    color: colors.gray400,

    ':hover': {
      color: colors.gray400,
    },
  }),

  menuPortal: base => ({
    ...base,
    zIndex: 3141592,
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
    primary: colors.blue600,
    primary75: colors.blue300,
    primary50: colors.blue100,
    primary25: colors.blue50,

    danger: colors.red600,
    dangerLight: colors.red100,

    neutral0: 'hsl(0, 0%, 100%)',
    neutral5: colors.gray50,
    neutral10: colors.gray100,
    neutral20: colors.gray200,
    neutral30: colors.gray300,
    neutral40: colors.gray400,
    neutral50: colors.gray500,
    neutral60: colors.gray600,
    neutral70: colors.gray700,
    neutral80: colors.gray800,
    neutral90: colors.gray900,
  },
});

const StyledReactSelect = styled(RSelect, {
  '.react-select__control': {
    boxShadow: '$border',
    cursor: 'pointer',
    width: '100%',
    background: '$bg',
    border: 'none',

    '&:hover': {
      boxShadow: '$borderHover',
    },
  },

  '.react-select__control--is-focused': {
    boxShadow: '$focus',

    '&:hover': {
      boxShadow: '$focus',
    },
  },

  '.react-select__single-value': {
    color: '$neutral600',
  },

  '.react-select__menu-list': {
    background: '$bg',
    border: '1px solid $neutral200',
    borderRadius: '$medium',
  },
});

interface GroupType<OptionType> {
  options: OptionType[];

  [key: string]: any;
}

interface Props<OptionType, IsMulti extends boolean>
  extends RSelectProps<OptionType, IsMulti, GroupType<OptionType>>,
    CSSProp {
  size?: 'medium' | 'large';
  label?: string;
}

export function Select<OptionType, IsMulti extends boolean = false>({
  size = 'medium',
  label,
  id,
  css,
  ...rest
}: Props<OptionType, IsMulti>) {
  const inputId = useId(id);

  return (
    <Box css={{ width: '100%', ...css }}>
      {label && (
        <Label labelId={inputId} css={{ mb: '$1' }}>
          {label}
        </Label>
      )}

      <StyledReactSelect
        {...rest}
        inputId={inputId}
        size={size}
        styles={customStyles(size)}
        theme={(rsTheme: RSTheme) => customTheme(rsTheme, size)}
        classNamePrefix="react-select"
        components={{
          Option,
          ...rest.components,
        }}
      />
    </Box>
  );
}

Select.displayName = 'Select';
Select.defaultProps = {
  size: 'medium',
};
