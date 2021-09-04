import React from 'react';
import Demo from './Text.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Text.constants';
import { Anchor } from '../../lib';

const TextDemo = () => {
  return (
    <Wrapper as="main">
      <header>
        <Title>Text</Title>
        <Paragraph>
          Use it to render text. This component accepts Color, Typography and Space props from{' '}
          <Anchor href="https://styled-system.com/api">styled-system</Anchor>.
        </Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { Text } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default TextDemo;
