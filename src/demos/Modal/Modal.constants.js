export const GITHUB_URL =
  'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Modal/Modal.jsx';

export const PROPS = [
  {
    name: 'isOpen',
    isRequired: true,
    type: 'boolean',
    description: 'The checked state of the checkbox.',
  },
  {
    name: 'contentLabel',
    isRequired: true,
    type: 'string',
    description:
      'String indicating how the content container should be announced to screenreaders.',
  },
  {
    name: 'onRequestClose',
    isRequired: true,
    type: 'function',
    description:
      'Function that will be run when the modal is requested to be closed (either by clicking on overlay or pressing ESC). Note: It is not called if isOpen is changed by other means.',
  },
  {
    name: 'width',
    isRequired: false,
    type: 'string',
    defaultValue: '"640px"',
    description: 'The width of the modal window.',
  },
];

export const exampleAppElement = `// Entry point (index.js)
import Modal from 'react-modal';

Modal.setAppElement('#root');

// Render your app
ReactDOM.render(<App />, document.getElementById('root'));
`;
