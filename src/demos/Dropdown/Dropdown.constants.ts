export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Dropdown/Dropdown.tsx';

export const PLACEMENT_OPTS: { label: string; value: 'left' | 'right' }[] = [
  { value: 'left', label: 'left' },
  { value: 'right', label: 'right' },
];

export const PROPS = [
  {
    name: 'trigger',
    isRequired: true,
    type: 'React element',
    description: 'The element that will trigger the dropdown.',
  },
  {
    name: 'children',
    isRequired: true,
    type: '[DropdownItem]',
    description: 'Array of DropdownItem components.',
  },
  {
    name: 'placement',
    isRequired: false,
    type: '"left" | "right"',
    defaultValue: 'left',
    description: 'Horizontal alignment of the dropdown.',
  },
];
