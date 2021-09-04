import React from 'react';
import { Anchor } from '../../lib';
import Demo from './Select.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubSubTitle, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { SELECT_PROPS } from './Select.constants';

const ButtonDemo = () => {
  return (
    <Wrapper as="main">
      <header>
        <Title>Select</Title>
        <Paragraph>Select component (based on react-select).</Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { Select } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <PropsTable props={SELECT_PROPS} />

      <section>
        <SubSubTitle>Note:</SubSubTitle>
        <Paragraph>
          This component accepts all props from the{' '}
          <Anchor href="https://react-select.com/props">react-select API</Anchor>. Please refer to
          the <Anchor href="https://react-select.com/props">docs</Anchor> for more information.
        </Paragraph>
      </section>
    </Wrapper>
  );
};

export default ButtonDemo;
