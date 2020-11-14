import React from 'react';
import styled from 'styled-components';
import Logo from '../Svgs/Logo';
import { Paragraph, SubTitle } from '../common/Typography';
import Usage from '../Usage/Usage';
import Wrapper from '../common/Wrapper';
import { Anchor, Button, Message } from '../../lib';

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
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

const Home = () => (
  <Wrapper>
    <Logo size={480} />
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
    <Message appearance="warning">This is work in progress</Message>
    <div>
      <SubTitle>Install</SubTitle>

      <StyledParagraph>UI-Capsules is available at npm. To add it to your app run:</StyledParagraph>
      <Usage>npm i @binarycapsule/ui-capsules</Usage>

      <SubTitle>Setup</SubTitle>

      <StyledParagraph>
        UI-Capsules sets some global styles and does a CSS reset. In order for the components to
        work correctly in your app import the global CSS file at the entry point.
      </StyledParagraph>
      <Usage>import &apos;@binarycapsule/ui-capsules/assets/global.css&apos;;</Usage>

      <StyledParagraph>
        If using the modal component, call setAppElement with a selector for the root element{' '}
        <Anchor href="http://reactcommunity.org/react-modal/accessibility/">
          (see react-modal docs)
        </Anchor>
        :
      </StyledParagraph>
      <Usage>{setAppElementExample}</Usage>
    </div>
  </Wrapper>
);

export default Home;
