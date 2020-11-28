export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/IllustratedIcon/IllustratedIcon.tsx';

export const ILLUSTRATED_ICON_PROPS = [
  {
    name: 'icon',
    isRequired: true,
    type: 'string',
    description: 'Name of the icon to render.',
  },
  {
    name: 'size',
    isRequired: false,
    type: 'string',
    defaultValue: '24px',
    description: 'The size of the icon.',
  },
  {
    name: 'onClick',
    isRequired: false,
    type: 'function',
    defaultValue: 'undefined',
    description: 'The onClick handler. If defined, the icon will act like a button.',
  },
  {
    name: 'primaryColor',
    isRequired: false,
    type: 'string',
    defaultValue: 'neutral.200',
    description: 'The primary color of the icon (on hover).',
  },
  {
    name: 'secondaryColor',
    isRequired: false,
    type: 'string',
    defaultValue: 'neutral.600',
    description: 'The secondary color of the icon.',
  },
  {
    name: 'primaryColorHover',
    isRequired: false,
    type: 'string',
    defaultValue: 'neutral.300',
    description: 'The primary color of the icon.',
  },
  {
    name: 'secondaryColorHover',
    isRequired: false,
    type: 'string',
    defaultValue: 'neutral.700',
    description: 'The secondary color of the icon (on hover).',
  },
];
