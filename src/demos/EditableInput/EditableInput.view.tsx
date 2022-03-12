import React from 'react';
import Demo from './EditableInput.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import { Main } from '../../components/common/Main';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './EditableInput.constants';

const EditableInputDemo = () => {
  return (
    <Main>
      <section>
        <Title>Editable Input</Title>
        <Paragraph>Renders text that can be edited in place by clicking on it.</Paragraph>
      </section>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { EditableInput } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <PropsTable props={PROPS} />
    </Main>
  );
};

export default EditableInputDemo;
