import styled from '@emotion/styled/macro';
import {
  compose,
  flexbox,
  FlexboxProps,
  layout,
  position,
  PositionProps,
  space,
} from 'styled-system';
import { LayoutProps, SpaceProps } from '../styledProps';

export interface BoxProps extends SpaceProps, FlexboxProps, PositionProps, LayoutProps {}

export const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  compose(space, flexbox, position, layout),
);
