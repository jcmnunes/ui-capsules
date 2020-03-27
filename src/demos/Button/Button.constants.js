export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Button/Button.tsx';

export const APPEARANCE_OPTS = [
  { value: 'primary', label: 'primary' },
  { value: 'secondary', label: 'secondary' },
  { value: 'success', label: 'success' },
  { value: 'warning', label: 'warning' },
  { value: 'error', label: 'error' },
  { value: 'minimal', label: 'minimal' },
  { value: 'link', label: 'link' },
  { value: 'none', label: 'none' },
];

export const SIZE_OPTS = [
  { value: 'small', label: 'small' },
  { value: 'medium', label: 'medium' },
  { value: 'large', label: 'large' },
];

export const AS_OPTS = [
  { value: 'button', label: 'button' },
  { value: 'a', label: 'a' },
];

export const PROPS = [
  {
    name: 'appearance',
    isRequired: false,
    type: '"primary" | "secondary" | "success" | "warning" | "error" | "minimal" | "link" | "none"',
    defaultValue: '"secondary"',
    description: 'Controls the overall look and feel of the button.',
  },
  {
    name: 'as',
    isRequired: false,
    type: '"a" | "button"',
    defaultValue: '"button"',
    description: 'Controls which tag gets rendered (button or a).',
  },
  {
    name: 'children',
    isRequired: false,
    type: 'string',
    defaultValue: '""',
    description: 'The text of the button.',
  },
  {
    name: 'iconAfter',
    isRequired: false,
    type: 'string',
    defaultValue: 'null',
    description: "Pass an icon string to render the respective icon after the button's text.",
  },
  {
    name: 'iconBefore',
    isRequired: false,
    type: 'string',
    defaultValue: 'null',
    description: "Pass an icon string to render the respective icon before the button's text.",
  },
  {
    name: 'isBlock',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description: 'If set to true, the button will extend to occupy the full width of its parent.',
  },
  {
    name: 'isDisabled',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description: 'If set to true, the button will be disabled.',
  },
  {
    name: 'isLoading',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description:
      'If set to true, the button will be disabled and it will display a loading indicator.',
  },
  {
    name: 'size',
    isRequired: false,
    type: '"small" | "medium" | "large"',
    defaultValue: 'medium',
    description: 'Changes the size of the button.',
  },
  {
    name: 'type',
    isRequired: false,
    type: '"button" | "submit"',
    defaultValue: 'button',
    description: 'Set this prop to "submit" when the button should submit a form.',
  },
];
