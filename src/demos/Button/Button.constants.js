export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Button/Button.jsx';

export const APPEARANCE_OPTS = [
  { value: 'primary', label: 'primary' },
  { value: 'secondary', label: 'secondary' },
  { value: 'success', label: 'success' },
  { value: 'warning', label: 'warning' },
  { value: 'error', label: 'error' },
  { value: 'dropdown', label: 'dropdown' },
  { value: 'link', label: 'link' },
  { value: 'minimal', label: 'minimal' },
];

export const SIZE_OPTS = [
  { value: 'small', label: 'small' },
  { value: 'medium', label: 'medium' },
  { value: 'large', label: 'large' },
];

export const AS_OPTS = [{ value: 'button', label: 'button' }, { value: 'a', label: 'a' }];

export const ICON_OPTS = [
  { value: null, label: 'none' },
  { value: 'AREA_GRAPH', label: 'AREA_GRAPH' },
  { value: 'BAR_GRAPH', label: 'BAR_GRAPH' },
  { value: 'PLUS', label: 'PLUS' },
  { value: 'CODE', label: 'CODE' },
  { value: 'COPY', label: 'COPY' },
  { value: 'CLOSE', label: 'CLOSE' },
];

export const BUTTON_PROPS = [
  {
    name: 'appearance',
    isRequired: true,
    type:
      '"primary" | "secondary" | "success" | "warning" | "error" | "dropdown" | "link" | "minimal"',
    description:
      'Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
  },
  {
    name: 'as',
    isRequired: false,
    type: '"a" | "button"',
    defaultValue: '"button"',
    description:
      'Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
  },
  {
    name: 'children',
    isRequired: false,
    type: 'string',
    defaultValue: '""',
    description:
      'Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
  },
  {
    name: 'color',
    isRequired: false,
    type: 'string',
    defaultValue: 'theme.blue400',
    description: 'Use this prop to give links a different color.',
  },
  {
    name: 'iconAfter',
    isRequired: false,
    type: 'string',
    defaultValue: 'null',
    description: "Pass an icon string to render the respective icon after the button's text.",
  },
  {
    name: 'iconBefore',
    isRequired: false,
    type: 'string',
    defaultValue: 'null',
    description: "Pass an icon string to render the respective icon before the button's text.",
  },
  {
    name: 'isBlock',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description: 'If set to true, the button will extend to occupy the full width of its parent.',
  },
  {
    name: 'isDisabled',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description: 'If set to true, the button will be disabled.',
  },
  {
    name: 'isLoading',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'false',
    description:
      'If set to true, the button will be disabled and it will display a loading indicator.',
  },
  {
    name: 'onClick',
    isRequired: false,
    type: 'function',
    defaultValue: 'null',
    description: 'Function to be called when clicking the button.',
  },
  {
    name: 'size',
    isRequired: false,
    type: '"small" | "medium" | "large"',
    defaultValue: 'medium',
    description: 'Changes the size of the button.',
  },
  {
    name: 'type',
    isRequired: false,
    type: '"button" | "submit"',
    defaultValue: 'button',
    description: 'Set this prop to "submit" when the button should submit a form.',
  },
];
