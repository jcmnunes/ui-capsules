export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/main/src/lib/Skeleton/Skeleton.tsx';

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
    name: 'bg',
    isRequired: false,
    type: 'theme color | hex value',
    defaultValue: 'neutral.200',
    description: 'The background color of the element',
  },
];
