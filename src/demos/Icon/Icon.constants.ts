import { PropsDoc } from '../types';

export const GITHUB_URL = 'https://github.com/jcmnunes/ui-capsules/blob/main/src/lib/Icon/Icon.tsx';

export const ICON_PROPS: PropsDoc[] = [
  {
    name: 'icon',
    isRequired: true,
    type: 'string',
    description: 'Name of the icon to render.',
  },
  {
    name: 'variant',
    isRequired: false,
    defaultValue: '"solid"',
    type: '"solid" | "outline"',
    description: 'Icon variant to render (solid or outline).',
  },
  {
    name: 'size',
    isRequired: false,
    defaultValue: '20 | 24',
    type: 'number',
    description: 'The size of the icon.',
  },
];
