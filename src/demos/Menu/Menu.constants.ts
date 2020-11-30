export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Menu/Menu.tsx';

export const PLACEMENT_OPTS: { label: string; value: 'left' | 'right' }[] = [
  { value: 'left', label: 'left' },
  { value: 'right', label: 'right' },
];

export const PROPS = [
  {
    name: 'trigger',
    isRequired: true,
    type: 'React Element',
    description: 'The element that will trigger the menu.',
  },
  {
    name: 'children',
    isRequired: true,
    type: 'MenuItem[]',
    description: 'Array of MenuItem components.',
  },
  {
    name: 'placement',
    isRequired: false,
    type: '"left" | "right"',
    defaultValue: 'left',
    description: 'Horizontal alignment of the menu.',
  },
];
