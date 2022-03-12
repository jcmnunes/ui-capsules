import React from 'react';
import Demo from './Input.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import { Main } from '../../components/common/Main';
import PropsTable from '../../components/PropsTable/PropsTable';
import { INPUT_PROPS } from './Input.constants';

const ButtonDemo = () => {
  return (
    <Main>
      <header>
        <Title>Input</Title>
        <Paragraph>Renders a custom input component.</Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { Input } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <PropsTable props={INPUT_PROPS} />
    </Main>
  );
};

export default ButtonDemo;
