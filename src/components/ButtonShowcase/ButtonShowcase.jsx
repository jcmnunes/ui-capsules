import React from 'react';
import { StyledShowcase, Title, SubTitle, Paragraph } from '../common';
import ButtonLive from './ButtonLive';
import Usage from './Usage';

const ButtonShowcase = () => {
  return (
    <StyledShowcase>
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
      <SubTitle>Showcase</SubTitle>
      <ButtonLive />
    </StyledShowcase>
  );
};

export default ButtonShowcase;
