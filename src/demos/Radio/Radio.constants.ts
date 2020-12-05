export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Radio/Radio.tsx';

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
    name: 'disabled',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description: 'The disabled state of the radio.',
  },
  {
    name: 'size',
    isRequired: false,
    type: '"small" | "medium" | "large"',
    defaultValue: '"small"',
    description: 'The size of the radio.',
  },
  {
    name: 'children',
    isRequired: false,
    type: 'string',
    defaultValue: 'undefined',
    description: 'The Checkbox label.',
  },
  {
    name: 'variantColor',
    isRequired: false,
    type: 'ThemeColors',
    defaultValue: 'primary',
    description: 'The color of the radio.',
  },
];
