export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/main/src/lib/IconButton/IconButton.tsx';

export const PROPS = [
  {
    name: 'icon',
    isRequired: true,
    type: 'string',
    description: 'Name of the icon to render.',
  },
  {
    name: 'variant',
    isRequired: false,
    type: '"primary" | "secondary" | "ghost" | "ghostGray" | "link"',
    defaultValue: '"primary"',
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
  {
    name: 'iconVariant',
    isRequired: false,
    type: '"solid" | "outline"',
    defaultValue: '"solid"',
    description: 'The type of icon to render (solid or outline).',
  },
];
