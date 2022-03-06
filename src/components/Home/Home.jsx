import React from 'react';
import { Alert, Button, styled } from '../../lib';
import { Paragraph, SubTitle, Title } from '../common/Typography';
import Usage from '../Usage/Usage';
import Wrapper from '../common/Wrapper';

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 16,
});

export const StyledParagraph = styled(Paragraph, {
  margin: '24px 0 16px',
});

export const providersExample = `import { ToastContainer } from '@binarycapsule/ui-capsules';

ReactDOM.render(
  <React.StrictMode> 
    <App />

    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
`;

export const useThemeExample = `import { useGlobalStyles } from '@binarycapsule/ui-capsules';

function App() {
  useGlobalStyles();

  return (
    <div>
      ...
    </div>
  );
}
`;

const Home = () => (
  <Wrapper>
    <Title>Getting Started</Title>

    <Description>
      <Paragraph>React UI kit.</Paragraph>

      <Button
        as="a"
        href="https://github.com/jcmnunes/ui-capsules"
        target="_blank"
        rel="noreferrer noopener"
        variant="ghostGray"
        leftIcon="github"
      >
        View source on GitHub
      </Button>
    </Description>

    <Alert
      variant="warning"
      title="🚨 Breakable toy 🚨"
      message="This library is a breakable toy. New versions will often contain breaking changes, even for non-major releases."
    />

    <div>
      <SubTitle>Install</SubTitle>

      <StyledParagraph>UI-Capsules is available at npm. To add it to your app run:</StyledParagraph>
      <Usage>npm i @binarycapsule/ui-capsules</Usage>

      <StyledParagraph>The following peer dependencies should also be installed:</StyledParagraph>
      <Usage>npm i react react-dom @stitches/react</Usage>

      <SubTitle>Setup</SubTitle>

      <StyledParagraph>Import the setup script at the entry point of you app:</StyledParagraph>
      <Usage>import &apos;@binarycapsule/ui-capsules/dist/setup&apos;;</Usage>

      <StyledParagraph>Render the ToastContainer:</StyledParagraph>
      <Usage>{providersExample}</Usage>

      <StyledParagraph>Render the useGlobalStyles hook:</StyledParagraph>
      <Usage>{useThemeExample}</Usage>
    </div>
  </Wrapper>
);

export default Home;
