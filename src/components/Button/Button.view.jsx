import React from 'react';
import Demo from './Button.demo';
import Usage from '../common/Usage';
import { Paragraph, SubTitle, Title } from '../common/Typography';
import Wrapper from '../common/Wrapper';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <Title>Button</Title>
      <Paragraph>
        Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor
        fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere
        consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
        venenatis vestibulum. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit
        amet fermentum.
      </Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Button } from '@binarycapsule/ui-capsules';"}</Usage>
      <SubTitle>Demo</SubTitle>
      <Demo />
    </Wrapper>
  );
};

export default ButtonDemo;
