import { AlertVariant } from '../../lib/Alert/Alert.styles';

export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Alert/Alert.tsx';

export const VARIANT_OPTS: { label: string; value: AlertVariant }[] = [
  { value: 'info', label: 'info' },
  { value: 'success', label: 'success' },
  { value: 'warning', label: 'warning' },
  { value: 'error', label: 'error' },
];

export const PROPS = [
  {
    name: 'variant',
    isRequired: false,
    defaultValue: '"info"',
    type: '"info" | "success" | "warning" | "error"',
    description: 'Changes the appearance of the Message.',
  },
  {
    name: 'title',
    isRequired: false,
    defaultValue: 'undefined',
    type: 'string',
    description: 'The title of the Alert.',
  },
  {
    name: 'message',
    isRequired: false,
    defaultValue: 'undefined',
    type: 'string',
    description: 'The message of the Alert.',
  },
  {
    name: 'onRequestClose',
    isRequired: false,
    defaultValue: 'undefined',
    type: 'function',
    description: 'Function to be called when closing the Alert.',
  },
  {
    name: 'actions',
    isRequired: false,
    defaultValue: 'undefined',
    type: 'Action[]',
    description:
      'An array of actions. These actions will be rendered in order at the bottom of the Alert, as link buttons.',
  },
  {
    name: 'extraAction',
    isRequired: false,
    defaultValue: 'undefined',
    type: 'Action',
    description:
      'Use this prop to render an additional action positioned in the right-side of the alert.',
  },
];
