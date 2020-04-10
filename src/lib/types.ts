import { icons } from './Icon/Icon.constants';
import { illustratedIcons } from './IllustratedIcon/IllustratedIcon.constants';
import { theme } from './theme';

export type Appearance = 'primary' | 'success' | 'warning' | 'error' | 'secondary';

export type ButtonAppearance = Appearance | 'minimal' | 'link' | 'none';

export type Size = 'small' | 'medium' | 'large';

export type IconType = keyof typeof icons;

export type IllustratedIconType = keyof typeof illustratedIcons;

export type Theme = typeof theme;
