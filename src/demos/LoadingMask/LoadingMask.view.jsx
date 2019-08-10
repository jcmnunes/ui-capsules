import React from 'react';
import Demo from './LoadingMask.demo';
import Usage from '../../components/common/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/common/PropsTable';
import { PROPS } from './LoadingMask.constants';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <Title>LoadingMask</Title>
      <Paragraph>Renders an element with a loading animation.</Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { LoadingMask } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default ButtonDemo;
