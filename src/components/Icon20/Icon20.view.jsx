import React from 'react';
import Demo from './Icon20.demo';
import Usage from '../common/Usage';
import { Paragraph, SubTitle, Title, UL } from '../common/Typography';
import Wrapper from '../common/Wrapper';
import PropsTable from '../common/PropsTable';
import { ICON20_PROPS } from './Icon20.constants';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <Title>Icon20</Title>
      <Paragraph>
        This component renders an icon from the collection of 20x20 icons. The collection comes from
        the following sources:
      </Paragraph>
      <UL>
        <li>Entypo</li>
        <li>Eva Icons</li>
      </UL>
      <Paragraph>
        The icon is especially useful to render inside buttons (as the iconBefore and iconAfter
        props). It can also be used to render actions inline and when there is not much space
        available).
      </Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Icon20 } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={ICON20_PROPS} />
    </Wrapper>
  );
};

export default ButtonDemo;
