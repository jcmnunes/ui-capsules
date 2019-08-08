export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Select/Select.jsx';

export const OPTIONS = [
  { value: 'lorem', label: 'Lorem' },
  { value: 'ipsum', label: 'Ipsum' },
  { value: 'dolor', label: 'Dolor' },
];

export const SIZE_OPTS = [
  { value: 'small', label: 'small' },
  { value: 'medium', label: 'medium' },
  { value: 'large', label: 'large' },
];

export const SELECT_PROPS = [
  {
    name: 'size',
    isRequired: false,
    type: '"small" | "medium" | "large"',
    defaultValue: '"medium"',
    description: 'Controls the size of the select.',
  },
];
