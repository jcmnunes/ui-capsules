import React from 'react';
import Demo from './Button.demo';
import Usage from '../../components/common/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/common/PropsTable';
import { PROPS } from './Button.constants';
import Button from '../../lib/Button/Button';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Title>Button</Title>
        <Button as="a" href="#" target="_blank" size="small" appearance="minimal" iconBefore="CODE">
          View source on GitHub
        </Button>
      </div>
      <Paragraph>
        The button is one of the most ubiquitous components in any UI. As usual, it must be used to
        trigger user actions. This button is a versatile component. It exists in several variants
        (controlled by a prop called &quot;appearance&quot;). In fact, this same component can be
        used to render both button and anchor tags (by using the prop &quot;as&quot;). This feature
        is important because it allows us to use the correct tag for every situation, while
        maintaining a consistent styling. As an example, a login button should be rendered as a
        button tag. However, a link to a different page should be rendered as an anchor instead.
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
