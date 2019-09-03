export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/EditableInput/EditableInput.jsx';

export const SIZE_OPTS = [
  { value: 'small', label: 'small' },
  { value: 'medium', label: 'medium' },
  { value: 'large', label: 'large' },
];

export const PROPS = [
  {
    name: 'value',
    isRequired: true,
    type: 'string',
    description: 'The text value of element.',
  },
  {
    name: 'action',
    isRequired: true,
    type: 'function',
    description:
      'The function to run when submitting a new value. The function accepts the new value as the first param.',
  },
  {
    name: 'size',
    isRequired: false,
    type: '"small" | "medium" | "large"',
    defaultValue: 'medium',
    description: 'Changes the size of the editable input.',
  },
  {
    name: 'isEditable',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'true',
    description: 'If set to false, the text is read-only.',
  },
  {
    name: 'hasButtons',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description: 'If set to true, an "Ok-Cancel" button pair will be rendered.',
  },
];
