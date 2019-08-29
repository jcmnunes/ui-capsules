export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Anchor/Anchor.jsx';

export const HREF_OPTS = [
  { value: 'http://example.com', label: 'http://example.com' },
  { value: 'http://example.org', label: 'http://example.org' },
  { value: 'http://example.net', label: 'http://example.net' },
];

export const PROPS = [
  {
    name: 'href',
    isRequired: true,
    type: 'string',
    description: 'Contains a URL or a URL fragment that the hyperlink points to.',
  },
  {
    name: 'children',
    isRequired: true,
    type: 'string',
    description: 'The text of the anchor.',
  },
];
