import { InputVariant } from '../../lib/Input/Input.styles';

export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/main/src/lib/Input/Input.tsx';

export const INPUT_VARIANT_OPTS: { label: string; value?: InputVariant }[] = [
  { value: undefined, label: 'none' },
  { value: 'success', label: 'success' },
  { value: 'error', label: 'error' },
];

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
    name: 'variant',
    isRequired: false,
    type: '"success" | "error"',
    defaultValue: 'undefined',
    description: 'The input variant.',
  },
  {
    name: 'label',
    isRequired: false,
    type: 'string',
    defaultValue: 'undefined',
    description: 'The input label.',
  },
  {
    name: 'helpText',
    isRequired: false,
    type: 'string',
    defaultValue: 'undefined',
    description: 'Help text rendered below the input',
  },
  {
    name: 'iconVariant',
    isRequired: false,
    type: '"solid" | "outline"',
    defaultValue: '"solid"',
    description: 'The type of icon to render (solid or outline).',
  },
];
