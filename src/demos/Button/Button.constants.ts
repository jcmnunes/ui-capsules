export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Button/Button.tsx';

export const PROPS = [
  {
    name: 'children',
    isRequired: true,
    type: 'string',
    description: 'The text of the button.',
  },
  {
    name: 'variant',
    isRequired: false,
    type: '"solid" | "outline" | "ghost" | "link"',
    defaultValue: '"solid"',
    description: 'Controls the look of the button.',
  },
  {
    name: 'as',
    isRequired: false,
    type: '"a" | "button"',
    defaultValue: '"button"',
    description: 'Controls which tag gets rendered (button or a).',
  },
  {
    name: 'leftIcon',
    isRequired: false,
    type: 'string',
    defaultValue: 'undefined',
    description: "Pass an icon string to render the respective icon before the button's text.",
  },
  {
    name: 'rightIcon',
    isRequired: false,
    type: 'string',
    defaultValue: 'null',
    description: "Pass an icon string to render the respective icon after the button's text.",
  },
  {
    name: 'iconVariant',
    isRequired: false,
    type: '"solid" | "outline"',
    defaultValue: '"solid"',
    description: 'The type of icon to render (solid or outline).',
  },
  {
    name: 'disabled',
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
