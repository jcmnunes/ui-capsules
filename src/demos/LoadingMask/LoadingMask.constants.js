export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/LoadingMask/LoadingMask.jsx';

export const PROPS = [
  {
    name: 'width',
    isRequired: true,
    type: 'string',
    description: 'Sets the element width',
  },
  {
    name: 'height',
    isRequired: true,
    type: 'string',
    description: 'Sets the element height',
  },
  {
    name: 'circular',
    isRequired: false,
    type: 'string',
    defaultValue: 'false',
    description: 'When true, the element will be circular',
  },
  {
    name: 'background',
    isRequired: false,
    type: 'string (hex value)',
    defaultValue: 'theme.neutral100',
    description: 'The background color of the element',
  },
];
