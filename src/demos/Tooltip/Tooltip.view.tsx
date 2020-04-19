import React from 'react';
import Demo from './Tooltip.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Tooltip.constants';
import { Anchor } from '../../lib';

const TooltipDemo = () => {
  return (
    <Wrapper>
      <Title>Tooltip</Title>
      <Paragraph>
        Renders a custom tooltip component (based on{' '}
        <Anchor href="https://github.com/mohsinulhaq/react-popper-tooltip">
          react-popper-tooltip
        </Anchor>
        ).
      </Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Tooltip } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default TooltipDemo;
