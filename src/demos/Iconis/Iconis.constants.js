export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Iconis/Iconis.tsx';

export const ICONIS_PROPS = [
  {
    name: 'icon',
    isRequired: true,
    type: 'string',
    description: 'Name of the icon to render (from the 24x24 collection).',
  },
  {
    name: 'primaryColor',
    isRequired: false,
    type: 'string',
    defaultValue: '#CBD2D8',
    description: 'The primary color of the icon.',
  },
  {
    name: 'secondaryColor',
    isRequired: false,
    type: 'string',
    defaultValue: '#52616D',
    description: 'The secondary color of the icon.',
  },
];
