import React from 'react';
import Demo from './Skeleton.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Skeleton.constants';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <Title>Skeleton</Title>
      <Paragraph>Renders an element with a loading animation.</Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Skeleton } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default ButtonDemo;
