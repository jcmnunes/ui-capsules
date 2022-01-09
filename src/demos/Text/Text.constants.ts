import { TextVariant } from '../../lib/Text/Text';

export const GITHUB_URL = 'https://github.com/jcmnunes/ui-capsules/blob/main/src/lib/Text/Text.tsx';

export const TEXT_VARIANT_OPTS: { label: string; value?: TextVariant }[] = [
  { value: undefined, label: 'none' },
  { value: 'smallCaps', label: 'smallCaps' },
  { value: 'label', label: 'label' },
  { value: 'helper', label: 'helper' },
];

export const PROPS = [
  {
    name: 'children',
    isRequired: true,
    type: 'string',
    description: 'The text to render.',
  },
  {
    name: 'variant',
    isRequired: false,
    type: 'TextVariant',
    description: 'Renders different text variants',
  },
];
