import React from 'react';
import Demo from './Switch.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { SWITCH_PROPS } from './Switch.constants';

const ButtonDemo = () => {
  return (
    <Wrapper as="main">
      <header>
        <Title>Switch</Title>
        <Paragraph>The Switch component is used as a Checkbox alternative.</Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { Switch } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <PropsTable props={SWITCH_PROPS} />
    </Wrapper>
  );
};

export default ButtonDemo;
