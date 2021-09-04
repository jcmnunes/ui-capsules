import React from 'react';
import Demo from './Spinner.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Spinner.constants';

const ButtonDemo = () => {
  return (
    <Wrapper as="main">
      <header>
        <Title>Spinner</Title>
        <Paragraph>Renders a spinner.</Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { Spinner } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default ButtonDemo;
