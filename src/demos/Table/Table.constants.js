export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Table/Table.ts';

export const TEXT_ALIGN_OPTS = [
  { value: 'left', label: 'left' },
  { value: 'center', label: 'center' },
  { value: 'right', label: 'right' },
];

export const PROPS = [
  {
    name: 'textAlign',
    type: '"left" | "center" | "right"',
    defaultValue: '"left"',
    description:
      'Text alignment in the cells. This prop should be passed to Table.Cell and Table.HeaderCell.',
  },
  {
    name: 'noWrap',
    type: 'boolean',
    defaultValue: '"false"',
    description:
      'If true, the text does not wrap. This prop should be passed to Table.Cell and Table.HeaderCell. Do not use it for long text.',
  },
];
