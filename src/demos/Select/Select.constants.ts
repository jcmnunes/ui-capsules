import { DualSize } from '../../lib';

export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/main/src/lib/Select/Select.tsx';

export const OPTIONS = [
  { value: 'lorem', label: 'Lorem' },
  { value: 'ipsum', label: 'Ipsum' },
  { value: 'dolor', label: 'Dolor' },
];

export const SIZE_OPTS: { label: string; value: DualSize }[] = [
  { value: 'medium', label: 'medium' },
  { value: 'large', label: 'large' },
];

export const SELECT_PROPS = [
  {
    name: 'size',
    isRequired: false,
    type: '"medium" | "large"',
    defaultValue: '"medium"',
    description: 'Controls the size of the select.',
  },
];
