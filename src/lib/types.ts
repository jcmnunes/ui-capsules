import { illustratedIcons } from './IllustratedIcon/IllustratedIcon.constants';
import { MouseEvent } from 'react';
import { solidIcons } from './Icon/Icon.constants';
import { CSS } from './stitches.config';
import { ButtonVariant } from './Button/Button.styles';

export type Action = {
  text: string;
  variant?: ButtonVariant;
  onClick(e: MouseEvent<HTMLButtonElement>): void;
};

export type ElementSize = 'small' | 'medium' | 'large';

export type DualSize = 'medium' | 'large';

export type AlignmentOptions = 'left' | 'center' | 'right';

export type IconType = keyof typeof solidIcons;

export type IconVariant = 'solid' | 'outline';

export type IllustratedIconType = keyof typeof illustratedIcons;

export type SelectOption<T> = { label: string; value: T };

export type Status = 'success' | 'warning' | 'error';

export interface CSSProp {
  css?: CSS;
}
