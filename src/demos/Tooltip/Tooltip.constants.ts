export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Tooltip/Tooltip.tsx';

export type TooltipPlacementOptions = 'bottom' | 'top' | 'right' | 'left' | 'auto';

export const PLACEMENT_OPTS: { label: string; value: TooltipPlacementOptions }[] = [
  { value: 'bottom', label: 'bottom' },
  { value: 'top', label: 'top' },
  { value: 'right', label: 'right' },
  { value: 'left', label: 'left' },
  { value: 'auto', label: 'auto' },
];

export const PROPS = [
  {
    name: 'children',
    isRequired: true,
    type: 'ReactNode',
    description: 'The element that triggers the tooltip.',
  },
  {
    name: 'content',
    isRequired: true,
    type: 'ReactNode',
    description: 'The content of the tooltip.',
  },
  {
    name: 'delay',
    isRequired: false,
    type: 'number',
    defaultValue: '300',
    description: 'Delay in showing the tooltip (ms).',
  },
  {
    name: 'placement',
    isRequired: false,
    type: '"auto" | "top" | "right" | "bottom" | "left"',
    defaultValue: 'bottom',
    description: 'The tooltip placement.',
  },
];
