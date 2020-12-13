export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Dialog/Dialog.tsx';

export const PROPS = [
  {
    name: 'isOpen',
    isRequired: true,
    type: 'boolean',
    description: 'The open state of the dialog.',
  },
  {
    name: 'actions',
    isRequired: true,
    type: 'Action[]',
    description:
      'An array of objects. Each object represents an action in the Dialog footer (see example above).',
  },
  {
    name: 'contentLabel',
    isRequired: true,
    type: 'string',
    description:
      'String indicating how the content container should be announced to screen-readers.',
  },
  {
    name: 'onRequestClose',
    isRequired: true,
    type: 'function',
    description: 'Function that closes the Dialog.',
  },
  {
    name: 'title',
    isRequired: false,
    type: 'string',
    description: 'The title of the dialog.',
    defaultValue: 'undefined',
  },
  {
    name: 'message',
    isRequired: true,
    type: 'string',
    description: 'The message that is displayed inside the dialog.',
  },
];
