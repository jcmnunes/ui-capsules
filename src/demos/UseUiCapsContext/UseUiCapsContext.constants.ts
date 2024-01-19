export const GITHUB_URL = 'https://github.com/jcmnunes/ui-capsules/blob/main/src/lib/UiCaps.tsx';

export const PROPS = [
  {
    name: 'theme',
    type: 'Theme',
    description: 'The current theme (light or dark).',
  },
  {
    name: 'isDarkTheme',
    type: 'boolean',
    description: 'Whether or not the dark theme is currently set.',
  },
  {
    name: 'setTheme',
    type: `(theme: 'light' | 'dark') => void`,
    description: 'Function to set the current theme.',
  },
];
