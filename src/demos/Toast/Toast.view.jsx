import React from 'react';
import Demo from './Toast.demo';
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
// one of the static toast methods:
// - success
// - warning
// - error
// - info
import { toast } from '@binarycapsule/ui-capsules';

toast.success({
  title: 'Success',
  message: 'A success toast is visible on the screen',
});
`;

const ToastView = () => {
  return (
    <Wrapper as="main">
      <header>
        <Title>Toast</Title>
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

export default ToastView;
