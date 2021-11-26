import { DualSize } from '../../lib';

export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Spinner/Spinner.tsx';

export const SIZE_OPTS: { label: string; value: DualSize }[] = [
  { value: 'medium', label: 'medium' },
  { value: 'large', label: 'large' },
];

export const VARIANT_OPTS: { label: string; value: 'light' | 'dark' }[] = [
  { value: 'light', label: 'light' },
  { value: 'dark', label: 'dark' },
];

export const PROPS = [
  {
    name: 'size',
    isRequired: false,
    type: '"medium" | "large"',
    defaultValue: 'medium',
    description: 'Changes the size of the Spinner.',
  },
  {
    name: 'variant',
    isRequired: false,
    type: '"light" | "dark"',
    defaultValue: 'light',
    description: 'The color of the Spinner.',
  },
];
