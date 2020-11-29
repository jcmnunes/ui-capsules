export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Input/Input.tsx';

export const INPUT_PROPS = [
  {
    name: 'size',
    isRequired: false,
    type: '"small" | "medium" | "large"',
    defaultValue: '"medium"',
    description: 'Changes the size of the input.',
  },
  {
    name: 'value',
    isRequired: false,
    type: 'string',
    defaultValue: 'undefined',
    description: 'The text of the input.',
  },
  {
    name: 'onChange',
    isRequired: false,
    type: 'function',
    defaultValue: 'undefined',
    description: 'The onChange handler.',
  },
  {
    name: 'disabled',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description: 'If set to true, the input will be disabled.',
  },
  {
    name: 'leftIcon',
    isRequired: false,
    type: 'string',
    defaultValue: 'undefined',
    description: "Pass an icon string to render the respective icon before the input's text.",
  },
  {
    name: 'rightIcon',
    isRequired: false,
    type: 'string',
    defaultValue: 'undefined',
    description: "Pass an icon string to render the respective icon after the input's text.",
  },
  {
    name: 'iconVariant',
    isRequired: false,
    type: '"solid" | "outline"',
    defaultValue: '"solid"',
    description: 'The type of icon to render (solid or outline).',
  },
  {
    name: 'error',
    isRequired: false,
    type: 'string',
    defaultValue: 'undefined',
    description: 'Pass an error message to be displayed below the input.',
  },
];
