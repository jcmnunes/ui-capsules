import { icons } from './Icon/Icon.constants';
import { illustratedIcons } from './IllustratedIcon/IllustratedIcon.constants';
import { theme } from './theme';
import { solidIcons } from './IconSolid/IconSolid.constants';
import { MouseEvent } from 'react';

export type VariantColor =
  | 'neutral'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal';

type ActionVariant = 'primary' | 'neutral' | 'error';

export type Action = {
  text: string;
  variant?: ActionVariant;
  onClick(e: MouseEvent<HTMLButtonElement>): void;
};

export type ElementSize = 'small' | 'medium' | 'large';

export type DualSize = 'medium' | 'large';

export type AlignmentOptions = 'left' | 'center' | 'right';

export type IconType = keyof typeof icons;

export type IconSolidType = keyof typeof solidIcons;

export type IconVariant = 'solid' | 'outline';

export type IllustratedIconType = keyof typeof illustratedIcons;

export type Theme = typeof theme;

export type SelectOption<T> = { label: 'string'; value: T };
