import React from 'react';
import Demo from './Text.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import { Main } from '../../components/common/Main';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Text.constants';

const TextView = () => {
  return (
    <Main>
      <header>
        <Title>Text</Title>
        <Paragraph>Use it to render text.</Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { Text } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <PropsTable props={PROPS} />
    </Main>
  );
};

export default TextView;
