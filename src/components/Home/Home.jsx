import React from 'react';
import styled from 'styled-components';
import Logo from '../Svgs/Logo';
import { Paragraph, SubTitle } from '../common/Typography';
import Usage from '../common/Usage';
import Wrapper from '../common/Wrapper';
import Button from '../../lib/Button/Button';
import Message from '../../lib/Message/Message';

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

const Home = () => (
  <Wrapper>
    <Logo size={480} />
    <Description>
      <Paragraph>
        React UI kit (used by{' '}
        <Button as="a" href="https://binarycapsule.tech" appearance="link" target="_blank">
          BinaryCapsule
        </Button>
        ).
      </Paragraph>
      <Button
        as="a"
        href="https://github.com/jcmnunes/ui-capsules"
        target="_blank"
        size="medium"
        appearance="dropdown"
        iconBefore="CODE"
      >
        View source on GitHub
      </Button>
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
      <Usage>import &apos;@binarycapsule/ui-capsules/dist/styles/global.css&apos;;</Usage>
      <StyledParagraph>To improve A11y, import the focus-visible polyfill as well:</StyledParagraph>
      <Usage>import &apos;focus-visible/dist/focus-visible&apos;;</Usage>
    </div>
  </Wrapper>
);

export default Home;
