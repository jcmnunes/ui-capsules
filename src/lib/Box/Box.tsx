import styled from '@emotion/styled';
import {
  background,
  BackgroundProps,
  border,
  color,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  overflow,
  OverflowProps,
  position,
  PositionProps,
  space,
} from 'styled-system';
import { BorderProps, ColorProps, LayoutProps, SpaceProps } from '../styledProps';

export interface BoxProps
  extends SpaceProps,
    FlexboxProps,
    PositionProps,
    LayoutProps,
    ColorProps,
    BorderProps,
    BackgroundProps,
    OverflowProps {}

export const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  compose(space, flexbox, position, layout, color, border, background, overflow),
);

Box.displayName = 'Box';
