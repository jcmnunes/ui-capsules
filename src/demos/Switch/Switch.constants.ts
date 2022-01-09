import { PropsDoc } from '../types';
import { DualSize } from '../../lib';

export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/main/src/lib/Switch/Switch.tsx';

export const SIZE_OPTS: { label: string; value: DualSize }[] = [
  { value: 'medium', label: 'medium' },
  { value: 'large', label: 'large' },
];

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
];
