import React from 'react';
import Demo from './Spinner.demo';
import Usage from '../../components/common/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/common/PropsTable';
import { PROPS } from './Spinner.constants';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <Title>Spinner</Title>
      <Paragraph>Renders a spinner.</Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Spinner } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default ButtonDemo;
