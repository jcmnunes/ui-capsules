import { ICONS } from './Icon/Icon.constants';
import { ILLUSTRATED_ICONS } from './IllustratedIcon/IllustratedIcon.constants';
import { theme } from './theme';

export type Appearance = 'primary' | 'success' | 'warning' | 'error' | 'secondary';

export type ButtonAppearance = Appearance | 'minimal' | 'link' | 'none';

export type Size = 'small' | 'medium' | 'large';

export type IconType = keyof typeof ICONS;

export type IllustratedIconType = keyof typeof ILLUSTRATED_ICONS;

export type Theme = typeof theme;
