import theme from '../../lib/theme';

export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/IconButton/IconButton.jsx';

export const DEFAULT_COLORS = [
  theme.neutral200,
  theme.neutral600,
  theme.neutral300,
  theme.neutral700,
  theme.neutral075,
];

export const DEFAULT_TEXT_COLOR = theme.neutral700;

export const PROPS = [
  {
    name: 'icon',
    isRequired: true,
    type: 'string',
    description: 'Name of the icon to render (from the 24x24 collection).',
  },
  {
    name: 'text',
    isRequired: false,
    type: 'string',
    defaultValue: '""',
    description: 'The optional button text.',
  },
  {
    name: 'type',
    isRequired: false,
    type: '"button" | "submit"',
    defaultValue: 'button',
    description: 'Set this prop to "submit" when the button should submit a form.',
  },
  {
    name: 'isLoading',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description:
      'If set to true, the button will be disabled and will display a loading indicator.',
  },
  {
    name: 'isDisabled',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description: 'If set to true, the button will be disabled.',
  },
  {
    name: 'isBlock',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description: 'If set to true, the button will extend to occupy the full width of the parent.',
  },
  {
    name: 'isRound',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description: 'If set to true, the button will be rounded.',
  },
  {
    name: 'hasChev',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description:
      'If set to true, renders a chevron icon (useful when the button is used as a dropdown trigger).',
  },
  {
    name: 'hasBackground',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description: 'If set to true, renders a background on hover.',
  },
  {
    name: 'size',
    isRequired: false,
    type: 'text',
    defaultValue: '24px',
    description:
      "The size of the IconButton. Don't set this prop if you want the button to have some text.",
  },
  {
    name: 'colors',
    isRequired: false,
    type: 'array',
    defaultValue: '[theme.neutral200, theme.neutral600, theme.neutral300, theme.neutral700]',
    description:
      'Array of four colors. The colors are primaryColor, secondaryColor, primaryColor on hover, secondaryColor on hover (see the Icon24 demo).',
  },
  {
    name: 'textColor',
    isRequired: false,
    type: 'string',
    defaultValue: 'theme.neutral075',
    description: "Button's text color.",
  },
];
