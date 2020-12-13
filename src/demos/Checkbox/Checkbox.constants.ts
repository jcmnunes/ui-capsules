import { ElementSize } from '../../lib';

export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Checkbox/Checkbox.tsx';

export const SIZE_OPTS: { label: string; value: ElementSize }[] = [
  { value: 'small', label: 'small' },
  { value: 'medium', label: 'medium' },
  { value: 'large', label: 'large' },
];

export const CHECKBOX_PROPS = [
  {
    name: 'checked',
    isRequired: true,
    type: 'boolean',
    description: 'The checked state of the checkbox.',
  },
  {
    name: 'onChange',
    isRequired: true,
    type: 'function',
    description: 'The function to handle the onChange event.',
  },
  {
    name: 'isDisabled',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description: 'The disabled state of the checkbox.',
  },
  {
    name: 'size',
    isRequired: false,
    type: '"small" | "medium" | "large"',
    defaultValue: '"small"',
    description: 'The size of the checkbox.',
  },
  {
    name: 'children',
    isRequired: false,
    type: 'ReactNode',
    defaultValue: 'undefined',
    description: 'The Checkbox label.',
  },
  {
    name: 'variantColor',
    isRequired: false,
    type: 'VariantColor',
    defaultValue: 'primary',
    description: 'The color of the checkbox.',
  },
];
