import React from 'react';
import { Anchor } from '../../lib';
import Demo from './Tooltip.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Tooltip.constants';

const TooltipDemo = () => {
  return (
    <Wrapper as="main">
      <header>
        <Title>Tooltip</Title>
        <Paragraph>
          Renders a custom tooltip component (based on{' '}
          <Anchor href="https://reach.tech/tooltip">Reach UI's Tooltip</Anchor>
          ).
        </Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { Tooltip } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default TooltipDemo;
