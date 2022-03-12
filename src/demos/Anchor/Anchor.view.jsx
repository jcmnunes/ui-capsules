import React from 'react';
import Demo from './Anchor.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import { Main } from '../../components/common/Main';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Anchor.constants';

const AnchorDemo = () => {
  return (
    <Main>
      <header>
        <Title>Anchor</Title>
        <Paragraph>
          Renders an <code>&quot;&lt;a&gt;&quot;</code> tag. This component is usually used with the
          prop <code>href</code> and with the anchor text as <code>children</code>. Behind the
          scenes, this component implements <code>target=&quot;_blank&quot;</code> with{' '}
          <code>rel=&quot;noreferrer noopener&quot;</code> to aid security.
        </Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { Anchor } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <PropsTable props={PROPS} />
    </Main>
  );
};

export default AnchorDemo;
