import React from 'react';
import Demo from './Input.demo';
import Usage from '../common/Usage';
import { Paragraph, SubTitle, Title } from '../common/Typography';
import Wrapper from '../common/Wrapper';
import PropsTable from '../common/PropsTable';
import { INPUT_PROPS } from './Input.constants';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <Title>Input</Title>
      <Paragraph>Renders a custom input component.</Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Input } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={INPUT_PROPS} />
    </Wrapper>
  );
};

export default ButtonDemo;
