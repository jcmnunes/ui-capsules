import React from 'react';
import { Anchor, Button, Alert } from '../../lib';
import styled from '@emotion/styled/macro';
import { Paragraph, SubTitle, Title } from '../common/Typography';
import Usage from '../Usage/Usage';
import Wrapper from '../common/Wrapper';

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const StyledParagraph = styled(Paragraph)`
  margin: 24px 0 16px;
`;

export const setAppElementExample = `import { setAppElement } from '@binarycapsule/ui-capsules';

setAppElement('#root');

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
`;

export const providersExample = `import { ThemeProvider, theme, ToastContainer } from '@binarycapsule/ui-capsules';

ReactDOM.render(
  <ThemeProvider theme={theme}> 
    <App />

    <ToastContainer />
  </ThemeProvider>,
  document.getElementById('root'),
);
`;

const Home = () => (
  <Wrapper>
    <Title>Getting Started</Title>

    <Description>
      <Paragraph>
        React UI kit (used by <Anchor href="https://binarycapsule.tech">Binary Capsule</Anchor>
        ).
      </Paragraph>

      <a href="https://github.com/jcmnunes/ui-capsules" target="_blank" rel="noreferrer noopener">
        <Button variant="ghost" variantColor="neutral" leftIcon="github">
          View source on GitHub
        </Button>
      </a>
    </Description>

    <Alert variant="warning" message="Work in progress" />

    <div>
      <SubTitle>Install</SubTitle>

      <StyledParagraph>UI-Capsules is available at npm. To add it to your app run:</StyledParagraph>
      <Usage>npm i @binarycapsule/ui-capsules</Usage>

      <StyledParagraph>The following peer dependencies should also be installed:</StyledParagraph>
      <Usage>
        npm i react react-dom @emotion/react @emotion/styled styled-system
        @styled-system/should-forward-prop
      </Usage>

      <StyledParagraph>As well as the following devDependencies:</StyledParagraph>
      <Usage>npm i -D @types/styled-system @types/react-modal @types/react-select</Usage>

      <SubTitle>Setup</SubTitle>

      <StyledParagraph>Import the setup script at the entry point of you app:</StyledParagraph>
      <Usage>import &apos;@binarycapsule/ui-capsules/dist/setup&apos;;</Usage>

      <StyledParagraph>
        If using the modal component, call setAppElement with a selector for the root element{' '}
        <Anchor href="http://reactcommunity.org/react-modal/accessibility/">
          (see react-modal docs)
        </Anchor>
        :
      </StyledParagraph>
      <Usage>{setAppElementExample}</Usage>

      <StyledParagraph>
        Wrap your app in the ThemeProvider and render the ToastContainer:
      </StyledParagraph>
      <Usage>{providersExample}</Usage>
    </div>
  </Wrapper>
);

export default Home;
