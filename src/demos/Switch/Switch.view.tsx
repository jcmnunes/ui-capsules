import React from 'react';
import Demo from './Switch.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { SWITCH_PROPS } from './Switch.constants';
import { Anchor } from '../../lib';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <Title>Switch</Title>
      <Paragraph>
        Renders a switch with an optional label. The switch is from the{' '}
        <Anchor href="https://github.com/markusenglund/react-switch">react-switch</Anchor> package.
      </Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Switch } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={SWITCH_PROPS} />
    </Wrapper>
  );
};

export default ButtonDemo;
