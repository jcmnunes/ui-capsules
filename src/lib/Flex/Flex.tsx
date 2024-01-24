import React, { ComponentPropsWithoutRef } from 'react';
import { styled } from 'styled-components';
import { Box } from '../Box/Box';

interface FlexProps {
  $flex?: number | string;
  $direction?: 'row' | 'column' | 'rowReverse' | 'columnReverse';
  $align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  $justify?: 'start' | 'center' | 'end' | 'between';
  $wrap?: 'noWrap' | 'wrap' | 'wrapReverse';
  $gap?: number;
}

const StyledFlex = styled(Box)<FlexProps>(
  {
    display: 'flex',
  },

  ({ $direction }) => {
    switch ($direction) {
      case 'row':
        return {
          flexDirection: 'row',
        };
      case 'column':
        return {
          flexDirection: 'column',
        };
      case 'rowReverse':
        return {
          flexDirection: 'row-reverse',
        };
      case 'columnReverse':
        return {
          flexDirection: 'column-reverse',
        };
      default:
        return {};
    }
  },

  ({ $align }) => {
    switch ($align) {
      case 'start':
        return {
          alignItems: 'flex-start',
        };
      case 'center':
        return {
          alignItems: 'center',
        };
      case 'end':
        return {
          alignItems: 'flex-end',
        };
      case 'stretch':
        return {
          alignItems: 'stretch',
        };
      case 'baseline':
        return {
          alignItems: 'baseline',
        };
      default:
        return {};
    }
  },

  ({ $justify }) => {
    switch ($justify) {
      case 'start':
        return {
          justifyContent: 'flex-start',
        };
      case 'center':
        return {
          justifyContent: 'center',
        };
      case 'end':
        return {
          justifyContent: 'flex-end',
        };
      case 'between':
        return {
          justifyContent: 'space-between',
        };
      default:
        return {};
    }
  },

  ({ $wrap }) => {
    switch ($wrap) {
      case 'noWrap':
        return {
          flexWrap: 'nowrap',
        };
      case 'wrap':
        return {
          flexWrap: 'wrap',
        };
      case 'wrapReverse':
        return {
          flexWrap: 'wrap-reverse',
        };
      default:
        return {};
    }
  },

  ({ $gap }) => {
    if ($gap) {
      return {
        gap: $gap,
      };
    }
  },

  ({ $flex }) => {
    if ($flex) {
      return {
        flex: $flex,
      };
    }
  },
);

export interface Props extends ComponentPropsWithoutRef<'div'> {
  flex?: number | string;
  direction?: 'row' | 'column' | 'rowReverse' | 'columnReverse';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between';
  wrap?: 'noWrap' | 'wrap' | 'wrapReverse';
  gap?: number;
  as?: React.ElementType;
}

export const Flex = ({ flex, direction, align, justify, wrap, gap, ...rest }: Props) => {
  return (
    <StyledFlex
      $flex={flex}
      $direction={direction}
      $align={align}
      $justify={justify}
      $wrap={wrap}
      $gap={gap}
      {...rest}
    />
  );
};
