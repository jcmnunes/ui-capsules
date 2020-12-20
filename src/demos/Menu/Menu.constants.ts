export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Menu/Menu.tsx';

export const PLACEMENT_OPTS: { label: string; value: 'bottom-start' | 'bottom-end' }[] = [
  { value: 'bottom-start', label: 'bottom-start' },
  { value: 'bottom-end', label: 'bottom-end' },
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
    type: 'TippyPlacement',
    defaultValue: 'bottom-start',
    description: 'Horizontal alignment of the menu.',
  },
];
