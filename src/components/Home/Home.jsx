import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { Alert, Anchor, Button } from '../../lib';
import { Paragraph, SubTitle, Title } from '../common/Typography';
import Usage from '../Usage/Usage';
import { Main } from '../common/Main';

export const Description = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 16,
});

export const StyledParagraph = styled(Paragraph)({
  margin: '24px 0 16px',
});

export const providerExample = `import React from 'react';
import ReactDOM from 'react-dom';
import { UiCaps } from '@binarycapsule/ui-capsules';
import { App } from './App.tsx';

ReactDOM.render(
  <React.StrictMode>
    <UiCaps>
      <App />
    </UiCaps>
  </React.StrictMode>,
  document.getElementById('root'),
);
`;

export const themeExample = `import React from 'react';
import {
  IconButton,
  useUiCapsContext,
} from '@binarycapsule/ui-capsules';

const App = () => {
  const { isDarkTheme, setTheme } = useUiCapsContext();

  return (
    <IconButton
      icon={isDarkTheme ? 'moon' : 'sun'}
      variant="ghostGray"
      onClick={() => setTheme(isDarkTheme ? 'light' : 'dark')}
      aria-label="Change theme"
    />
  );
};
`;

const Home = () => (
  <Main>
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
      <Usage>npm i react@17 react-dom@17 styled-components@6</Usage>

      <SubTitle>Setup</SubTitle>

      <StyledParagraph>Wrap your application with UiCaps:</StyledParagraph>
      <Usage>{providerExample}</Usage>

      <StyledParagraph>
        To toggle dark theme, use the{' '}
        <Anchor as={Link} to="/use-uicaps-context" isInternal>
          useUiCapsContext
        </Anchor>{' '}
        hook:
      </StyledParagraph>
      <Usage>{themeExample}</Usage>
    </div>
  </Main>
);

export default Home;
