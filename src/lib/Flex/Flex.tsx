import { styled } from 'styled-components';
import { Box } from '../Box/Box';
import { theme } from '../theme';

interface FlexProps {
  $direction?: 'row' | 'column' | 'rowReverse' | 'columnReverse';
  $align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  $justify?: 'start' | 'center' | 'end' | 'between';
  $wrap?: 'noWrap' | 'wrap' | 'wrapReverse';
  $gap?: keyof (typeof theme)['space'];
}

export const Flex = styled(Box)<FlexProps>(
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
        return {
          flexDirection: 'row',
        };
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
        return {
          alignItems: 'flex-start',
        };
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
        return {
          justifyContent: 'flex-start',
        };
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
        return {
          flexWrap: 'nowrap',
        };
    }
  },

  ({ $gap, theme }) => {
    if ($gap) {
      return {
        gap: theme.space[$gap],
      };
    }
  },
);
