import React from 'react';
import Demo from './Skeleton.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import { Main } from '../../components/common/Main';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Skeleton.constants';

const ButtonDemo = () => {
  return (
    <Main>
      <header>
        <Title>Skeleton</Title>
        <Paragraph>Renders an element with a loading animation.</Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { Skeleton } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <PropsTable props={PROPS} />
    </Main>
  );
};

export default ButtonDemo;
