export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Checkbox/Checkbox.tsx';

export const SIZE_OPTS = [
  { value: 'small', label: 'small' },
  { value: 'medium', label: 'medium' },
  { value: 'large', label: 'large' },
];

export const APPEARANCE_OPTS = [
  { value: 'primary', label: 'primary' },
  { value: 'success', label: 'success' },
  { value: 'neutral', label: 'neutral' },
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
    type: 'string',
    defaultValue: 'null',
    description: 'The Checkbox label.',
  },
  {
    name: 'appearance',
    isRequired: false,
    type: '"primary" | "success" | "neutral"',
    defaultValue: '"neutral"',
    description: 'The appearance of the checkbox.',
  },
  {
    name: 'onClick',
    isRequired: false,
    type: 'function',
    defaultValue: 'null',
    description: 'Function to be called when clicking the checkbox.',
  },
];
