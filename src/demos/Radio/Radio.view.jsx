import React from 'react';
import Demo from './Radio.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Radio.constants';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <Title>Radio</Title>
      <Paragraph>Renders a custom radio with an optional label.</Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Radio } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default ButtonDemo;
