import React from 'react';
import Demo from './Message.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Message.constants';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <Title>Message</Title>
      <Paragraph>
        Use it to display themed messages to the user (errors, warnings, and success messages).
      </Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Message } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default ButtonDemo;
