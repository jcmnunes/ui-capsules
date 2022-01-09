import { ElementSize, IconVariant, Status } from '../../lib';
import { ButtonVariant } from '../../lib/Button/Button.styles';

export const BTN_VARIANT_OPTS: { label: string; value: ButtonVariant }[] = [
  { value: 'primary', label: 'primary' },
  { value: 'secondary', label: 'secondary' },
  { value: 'error', label: 'error' },
  { value: 'ghost', label: 'ghost' },
  { value: 'ghostGray', label: 'ghostGray' },
  { value: 'link', label: 'link' },
];

export const SIZE_OPTS: { label: string; value: ElementSize }[] = [
  { value: 'small', label: 'small' },
  { value: 'medium', label: 'medium' },
  { value: 'large', label: 'large' },
];

export const ICON_VARIANT_OPTS: { label: string; value: IconVariant }[] = [
  { value: 'solid', label: 'solid' },
  { value: 'outline', label: 'outline' },
];

export const STATUS_OPTS: { label: string; value: Status }[] = [
  { value: 'success', label: 'success' },
  { value: 'warning', label: 'warning' },
  { value: 'error', label: 'error' },
];
