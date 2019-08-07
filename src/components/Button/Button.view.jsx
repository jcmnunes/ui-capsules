import React from 'react';
import Demo from './Button.demo';
import Usage from '../common/Usage';
import { Paragraph, SubTitle, Title } from '../common/Typography';
import Wrapper from '../common/Wrapper';
import PropsTable from '../common/PropsTable';
import { BUTTON_PROPS } from './Button.constants';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <Title>Button</Title>
      <Paragraph>
        The button is one of the most ubiquitous components in any UI. As usual, it must be used to
        trigger user actions. This button is a versatile component. It exists in several variants
        (controlled by a prop called appearance). In fact, this same component can be used to render
        both button and anchor tags. This feature is important because it allows us to use the
        correct tag for every situation, while maintaining a consistent styling. As an example, a
        login button should be rendered as a button tag. However, a link to a different page should
        be rendered as an anchor instead.
      </Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Button } from '@binarycapsule/ui-capsules';"}</Usage>
      <SubTitle>Demo</SubTitle>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={BUTTON_PROPS} />
    </Wrapper>
  );
};

export default ButtonDemo;
