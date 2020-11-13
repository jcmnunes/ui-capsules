import * as CSS from 'csstype';
import { theme } from './theme';

export interface ColorProps {
  color?: string;
  bg?: string;
}

export interface TypographyProps {
  fontSize?: keyof typeof theme.fontSizes;
  fontWeight?: keyof typeof theme.fontWeights;
  lineHeight?: keyof typeof theme.lineHeights | string;
  letterSpacing?: keyof typeof theme.letterSpacings;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit';
  textDecorationLine?: CSS.Property.TextDecorationLine;
  textAlign?: CSS.Property.TextAlign;
}

export type Space = keyof typeof theme.space;

export interface MarginProps {
  m?: Space | number;
  mt?: Space | number;
  mr?: Space | number;
  mb?: Space | number;
  ml?: Space | number;
  mx?: Space | number;
  my?: Space | number;
}

export interface PaddingProps {
  p?: Space | number;
  pt?: Space | number;
  pr?: Space | number;
  pb?: Space | number;
  pl?: Space | number;
  px?: Space | number;
  py?: Space | number;
}

export interface SpaceProps extends MarginProps, PaddingProps {}

export interface BorderProps {
  border?: string;
  borderRadius?: keyof typeof theme.radii;
  borderWidth?: number | string;
  borderColor?: string;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderTopLeftRadius?: keyof typeof theme.radii;
  borderTopRightRadius?: keyof typeof theme.radii;
  borderBottomLeftRadius?: keyof typeof theme.radii;
  borderBottomRightRadius?: keyof typeof theme.radii;
}

export interface LayoutProps {
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  display?: CSS.Property.Display;
}

export type PropsWithPseudo<StyledProps, Pseudo extends keyof any> = StyledProps &
  Partial<Record<Pseudo, StyledProps>>;
