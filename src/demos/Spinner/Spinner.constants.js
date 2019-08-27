export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Spinner/Spinner.jsx';

export const SIZE_OPTS = [
  { value: 'small', label: 'small' },
  { value: 'medium', label: 'medium' },
  { value: 'large', label: 'large' },
];

export const APPEARANCE_OPTS = [
  { value: 'primary', label: 'primary' },
  { value: 'secondary', label: 'secondary' },
  { value: 'success', label: 'success' },
  { value: 'warning', label: 'warning' },
  { value: 'error', label: 'error' },
  { value: 'minimal', label: 'minimal' },
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
