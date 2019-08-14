export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Message/Message.jsx';

export const APPEARANCE_OPTS = [
  { value: 'success', label: 'success' },
  { value: 'warning', label: 'warning' },
  { value: 'error', label: 'error' },
];

export const PROPS = [
  {
    name: 'children',
    isRequired: true,
    type: 'node',
    description: 'The text (or component) to render inside the message.',
  },
  {
    name: 'appearance',
    isRequired: true,
    type: '"success" | "warning" | "error"',
    description: 'Changes the appearance of the Message.',
  },
];
