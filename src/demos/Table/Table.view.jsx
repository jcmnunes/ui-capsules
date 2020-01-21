import React from 'react';
import Demo from './Table.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Table.constants';

const ModalDemo = () => {
  return (
    <Wrapper>
      <Title>Table</Title>
      <Paragraph>Renders a table.</Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Table } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default ModalDemo;
