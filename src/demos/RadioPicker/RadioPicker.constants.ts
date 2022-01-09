export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/main/src/lib/RadioPicker/RadioPicker.tsx';

export const EXAMPLE_RADIOS = [
  { id: 1, label: 'Lorem Ipsum', helpText: 'Praesent commodo cursus magna.' },
  { id: 2, label: 'Amet Dapibus', helpText: 'Maecenas sed diam eget risus.' },
  { id: 3, label: 'Nullam Sit', helpText: 'Vestibulum id ligula porta.' },
];

export const PROPS = [
  {
    name: 'checked',
    isRequired: true,
    type: 'boolean',
    description: 'The checked state of the radio.',
  },
  {
    name: 'onChange',
    isRequired: true,
    type: 'function',
    description: 'The function to handle the onChange event.',
  },
  {
    name: 'label',
    isRequired: true,
    type: 'string',
    description: 'The RadioPicker label.',
  },
  {
    name: 'helpText',
    isRequired: false,
    type: 'string',
    defaultValue: undefined,
    description: 'Helper text rendered below the label.',
  },
];
