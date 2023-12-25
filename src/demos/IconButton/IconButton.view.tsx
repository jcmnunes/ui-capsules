import React from 'react';
import Demo from './IconButton.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import { Main } from '../../components/common/Main';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './IconButton.constants';

const IconButtonDemo = () => {
  return (
    <Main>
      <header>
        <Title>IconButton</Title>
        <Paragraph>IconButton composes the Button component. It renders only an icon.</Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { IconButton } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <PropsTable props={PROPS} />
    </Main>
  );
};

export default IconButtonDemo;
