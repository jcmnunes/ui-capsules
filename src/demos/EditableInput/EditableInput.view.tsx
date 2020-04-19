import React from 'react';
import Demo from './EditableInput.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './EditableInput.constants';

const EditableInputDemo = () => {
  return (
    <Wrapper>
      <Title>Editable Input</Title>
      <Paragraph>Renders text that can be edited in place by clicking on it.</Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { EditableInput } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default EditableInputDemo;
