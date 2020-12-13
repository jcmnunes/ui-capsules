import { PropsDoc } from '../types';

export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Switch/Switch.tsx';

export const SWITCH_PROPS: PropsDoc[] = [
  {
    name: 'checked',
    isRequired: true,
    type: 'boolean',
    description: 'The checked state of the switch.',
  },
  {
    name: 'onChange',
    isRequired: true,
    type: 'function',
    description: 'The function to handle the onChange event.',
  },
  {
    name: 'disabled',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description: 'The disabled state of the switch.',
  },
  {
    name: 'size',
    isRequired: false,
    type: '"small" | "medium" | "large"',
    defaultValue: '"medium"',
    description: 'The size of the switch.',
  },
  {
    name: 'children',
    isRequired: false,
    type: 'string',
    defaultValue: 'null',
    description: 'The switch label.',
  },
  {
    name: 'variantColor',
    isRequired: false,
    type: 'VariantColor',
    defaultValue: 'primary',
    description: 'The color of the Switch.',
  },
];
