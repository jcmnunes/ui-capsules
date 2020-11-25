import { ButtonVariant } from '../../lib/Button/Button.styles';
import { theme, ThemeColors } from '../../lib/theme';
import { ElementSize, IconVariant } from '../../lib';

export const VARIANT_OPTS: { label: string; value: ButtonVariant }[] = [
  { value: 'solid', label: 'solid' },
  { value: 'outline', label: 'outline' },
  { value: 'ghost', label: 'ghost' },
  { value: 'link', label: 'link' },
];

const colorsBlackList = ['bg', 'fg', 'white', 'black'];

export const VARIANT_COLOR_OPTS: { label: string; value: ThemeColors }[] = Object.keys(theme.colors)
  .filter(color => !colorsBlackList.includes(color))
  .map(color => ({ value: color, label: color }));

export const SIZE_OPTS: { label: string; value: ElementSize }[] = [
  { value: 'small', label: 'small' },
  { value: 'medium', label: 'medium' },
  { value: 'large', label: 'large' },
];

export const ICON_VARIANT_OPTS: { label: string; value: IconVariant }[] = [
  { value: 'solid', label: 'solid' },
  { value: 'outline', label: 'outline' },
];
