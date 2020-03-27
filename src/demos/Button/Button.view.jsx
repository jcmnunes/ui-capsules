import React from 'react';
import Demo from './Button.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Button.constants';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <Title>Button</Title>
      <Paragraph>
        This component can render a large variety of buttons. Use the Demo below to generate the
        desired button type.
      </Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Button } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default ButtonDemo;
