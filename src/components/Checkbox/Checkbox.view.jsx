import React from 'react';
import Demo from './Checkbox.demo';
import Usage from '../common/Usage';
import { Paragraph, SubTitle, Title, UL } from '../common/Typography';
import Wrapper from '../common/Wrapper';
import PropsTable from '../common/PropsTable';
import { CHECKBOX_PROPS } from './Checkbox.constants';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <Title>Checkbox</Title>
      <Paragraph>Renders a custom checkbox with an optional label.</Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Checkbox } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={CHECKBOX_PROPS} />
    </Wrapper>
  );
};

export default ButtonDemo;
