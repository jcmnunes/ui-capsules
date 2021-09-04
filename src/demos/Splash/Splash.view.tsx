import React from 'react';
import Demo from './Splash.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Splash.constants';

const SplashDemo = () => {
  return (
    <Wrapper as="main">
      <header>
        <Title>Splash</Title>
        <Paragraph>
          Renders a full-page spinner. You can pass anything that can be rendered as children. The
          common scenario is to pass the app logo (will be rendered above the spinner).
        </Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { Splash } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default SplashDemo;
