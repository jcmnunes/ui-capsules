import { SplashVariant } from '../../lib/Splash/Splash';

export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Splash/Splash.tsx';

export const SPLASH_VARIANT_OPTS: { label: string; value: SplashVariant }[] = [
  { label: 'splash', value: 'splash' },
  { label: 'spinner', value: 'spinner' },
];

export const PROPS = [
  {
    name: 'variant',
    isRequired: false,
    type: '"splash" | "spinner"',
    defaultValue: '"splash"',
    description:
      'If you want to render a Splash screen, pass the variant "splash". If a full page spinner is what you needed, pass "spinner" instead.',
  },
  {
    name: 'showSpinner',
    isRequired: false,
    type: 'boolean',
    defaultValue: 'true',
    description:
      'If true, this component renders a spinner (has no effect if the variant is "spinner").',
  },
  {
    name: 'children',
    isRequired: false,
    type: 'node',
    defaultValue: 'undefined',
    description: 'The text or element to render above the spinner.',
  },
];
