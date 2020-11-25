import { PropsDoc } from '../types';

export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Icon/Icon.tsx';

export const ICON_PROPS: PropsDoc[] = [
  {
    name: 'icon',
    isRequired: true,
    type: 'string',
    description: 'Name of the icon to render.',
  },
  {
    name: 'size',
    isRequired: false,
    defaultValue: '20px',
    type: 'string',
    description: 'The size of the icon.',
  },
];
