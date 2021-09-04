import React from 'react';
import Demo from './TruncatedText.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './TruncatedText.constants';

const TextDemo = () => {
  return (
    <Wrapper as="main">
      <header>
        <Title>TruncatedText</Title>
        <Paragraph>
          Use this component to truncate long text by using an ellipsis. When the text is truncated
          a tooltip displays the full content on hover.
        </Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { TruncatedText } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default TextDemo;
