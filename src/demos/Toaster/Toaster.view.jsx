import React from 'react';
import Demo from './Toaster.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import { Anchor } from '../../lib';

const usage = `// Add the ToastContainer component to the app
import { ToastContainer } from '@binarycapsule/ui-capsules';

ReactDOM.render(
  <>
    <App />

    <ToastContainer />
  </>,
  document.getElementById('root'),
);

// Launch toasts everywhere else in your app by using
// one of the static Toaster methods:
// - success
// - warning
// - error
// - info
import { Toaster } from '@binarycapsule/ui-capsules';

Toaster.success({
  title: 'Success',
  message: 'A success toast is visible on the screen',
});
`;

const ToasterDemo = () => {
  return (
    <Wrapper as="main">
      <header>
        <Title>Toaster</Title>
        <Paragraph>
          Notification system based on the{' '}
          <Anchor href="https://github.com/fkhadra/react-toastify">react-toastify</Anchor> package.
        </Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{usage}</Usage>
      </section>

      <Demo />
    </Wrapper>
  );
};

export default ToasterDemo;
