import { ICONS } from './Icon/Icon.constants';
import { ICONIS } from './Iconis/Iconis.constants';
import { theme } from './theme';

export type Appearance = 'primary' | 'success' | 'warning' | 'error' | 'secondary';

export type ButtonAppearance = Appearance | 'minimal' | 'link' | 'none';

export type Size = 'small' | 'medium' | 'large';

export type IconType = keyof typeof ICONS;

export type IconisType = keyof typeof ICONIS;

export type Theme = typeof theme;
