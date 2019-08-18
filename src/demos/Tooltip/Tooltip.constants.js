export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Tooltip/Tooltip.jsx';

export const PLACEMENT_OPTS = [
  { value: 'bottom', label: 'bottom' },
  { value: 'top', label: 'top' },
  { value: 'right', label: 'right' },
  { value: 'left', label: 'left' },
  { value: 'auto', label: 'auto' },
];

export const TRIGGER_OPTS = [
  { value: 'hover', label: 'hover' },
  { value: 'click', label: 'click' },
  { value: 'right-click', label: 'right-click' },
  { value: 'none', label: 'none' },
];

export const PROPS = [
  {
    name: 'children',
    isRequired: true,
    type: 'React element',
    description: 'The element that triggers the tooltip.',
  },
  {
    name: 'tooltip',
    isRequired: true,
    type: 'string',
    description: 'The text to render inside the tooltip.',
  },
  {
    name: 'delayShow',
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
  {
    name: 'trigger',
    isRequired: false,
    type: '"click" | "hover" | "right-click" | "none"',
    defaultValue: 'hover',
    description: 'The event that triggers the tooltip.',
  },
  {
    name: 'followCursor',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to spawn the tooltip at the cursor position.',
  },
];
