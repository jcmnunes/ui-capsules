import React from 'react';
import Demo from './IconButton.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './IconButton.constants';

const AnchorDemo = () => {
  return (
    <Wrapper>
      <Title>IconButton</Title>
      <Paragraph>Renders an IconButton using icons from the Iconis collection.</Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { IconButton } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default AnchorDemo;
