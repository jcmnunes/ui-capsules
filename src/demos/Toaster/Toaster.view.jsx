import React from 'react';
import Demo from './Toaster.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import { Anchor } from '../../lib';

const usage = `// Wrap your App component with WithToasts
import { WithToasts } from '@binarycapsule/ui-capsules';

ReactDOM.render(
  <WithToasts>
    <App />
  </WithToasts>,
  document.getElementById('root'),
);

// Launch toasts everywhere else in your app by using
// one of the static Toaster methods:
// - success
// - warning
// - error
// - info
import Toaster from '@binarycapsule/ui-capsules';

Toaster.success({
  title: 'Success',
  message: 'A success toast is visible on the screen',
});
`;

const ToasterDemo = () => {
  return (
    <Wrapper>
      <Title>Toaster</Title>
      <Paragraph>
        Notification system based on the{' '}
        <Anchor href="https://github.com/jossmac/react-toast-notifications">
          react-toast-notifications
        </Anchor>{' '}
        package.
      </Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{usage}</Usage>
      <Demo />
      {/* <SubTitle>Props</SubTitle> */}
      {/* <PropsTable props={SELECT_PROPS} /> */}
    </Wrapper>
  );
};

export default ToasterDemo;
