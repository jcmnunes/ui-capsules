import { ElementSize } from '../../lib';

export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Modal/Modal.tsx';

export const SIZE_OPTS: { label: string; value: ElementSize }[] = [
  { value: 'small', label: 'small' },
  { value: 'medium', label: 'medium' },
  { value: 'large', label: 'large' },
];

export const PROPS = [
  {
    name: 'isOpen',
    isRequired: true,
    type: 'boolean',
    description: 'The open state of the modal.',
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
    isRequired: false,
    type: 'function',
    defaultValue: 'undefined',
    description:
      "Function that will be run when the modal is requested to be closed (either by clicking on overlay or pressing ESC). Note: It is not called if isOpen is changed by other means. If omitted, the modal can't be closed by the user (the close button will also not be rendered).  ",
  },
  {
    name: 'size',
    isRequired: false,
    type: 'ElementSize',
    defaultValue: '"medium"',
    description: 'The width of the modal window (small | medium | large).',
  },
];
