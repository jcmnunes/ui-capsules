import { Appearance, ElementSize } from '../../lib/types';

export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Radio/Radio.tsx';

export const SIZE_OPTS: { label: string; value: ElementSize }[] = [
  { value: 'small', label: 'small' },
  { value: 'medium', label: 'medium' },
  { value: 'large', label: 'large' },
];

export const APPEARANCE_OPTS: { label: string; value: Appearance }[] = [
  { value: 'primary', label: 'primary' },
  { value: 'secondary', label: 'secondary' },
  { value: 'success', label: 'success' },
  { value: 'error', label: 'error' },
];

export const PROPS = [
  {
    name: 'checked',
    isRequired: true,
    type: 'boolean',
    description: 'The checked state of the radio.',
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
    description: 'The disabled state of the radio.',
  },
  {
    name: 'inputSize',
    isRequired: false,
    type: '"small" | "medium" | "large"',
    defaultValue: '"small"',
    description: 'The size of the radio.',
  },
  {
    name: 'children',
    isRequired: false,
    type: 'string',
    defaultValue: 'null',
    description: 'The Checkbox label.',
  },
  {
    name: 'appearance',
    isRequired: false,
    type: '"primary" | "success" | "neutral"',
    defaultValue: '"neutral"',
    description: 'The appearance of the radio.',
  },
];
