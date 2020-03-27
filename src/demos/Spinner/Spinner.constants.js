export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Spinner/Spinner.tsx';

export const SIZE_OPTS = [
  { value: 'small', label: 'small' },
  { value: 'medium', label: 'medium' },
  { value: 'large', label: 'large' },
];

export const APPEARANCE_OPTS = [
  { value: 'light', label: 'light' },
  { value: 'dark', label: 'dark' },
];

export const PROPS = [
  {
    name: 'size',
    isRequired: false,
    type: '"small" | "medium" | "large"',
    defaultValue: 'medium',
    description: 'Changes the size of the Spinner.',
  },
  {
    name: 'appearance',
    isRequired: false,
    type: '"primary" | "secondary" | "success" | "warning" | "error" | "minimal"',
    defaultValue: 'secondary',
    description: 'Changes the appearance of the spinner.',
  },
];
