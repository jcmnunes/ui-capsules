import { ICONS as ICONS16 } from './Icon16/Icon16.constants';
import { ICONS as ICONS20 } from './Icon20/Icon20.constants';
import { ICONS as ICONS24 } from './Icon24/Icon24.constants';
import { theme } from './theme';

export type Appearance = 'primary' | 'success' | 'warning' | 'error' | 'secondary';

export type ButtonAppearance = Appearance | 'minimal' | 'link' | 'none';

export type Size = 'small' | 'medium' | 'large';

export type Icon16Type = keyof typeof ICONS16;

export type Icon20Type = keyof typeof ICONS20;

export type Icon24Type = keyof typeof ICONS24;

export type Theme = typeof theme;
