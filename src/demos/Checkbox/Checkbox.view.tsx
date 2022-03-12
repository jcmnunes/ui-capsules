import React from 'react';
import Demo from './Checkbox.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import { Main } from '../../components/common/Main';
import PropsTable from '../../components/PropsTable/PropsTable';
import { CHECKBOX_PROPS } from './Checkbox.constants';

const ButtonDemo = () => {
  return (
    <Main>
      <section>
        <Title>Checkbox</Title>
        <Paragraph>Renders a custom checkbox with an optional label.</Paragraph>
      </section>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { Checkbox } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <PropsTable props={CHECKBOX_PROPS} />
    </Main>
  );
};

export default ButtonDemo;
