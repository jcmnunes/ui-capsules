import React from 'react';
import Demo from './Button.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Button.constants';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <Title>Button</Title>
      <Paragraph>
        Button must be used to trigger user actions. It can render both <code>&lt;button&gt;</code>{' '}
        and <code>&lt;a&gt;</code> tags (by using the prop &quot;as&quot;).
      </Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Button } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default ButtonDemo;
