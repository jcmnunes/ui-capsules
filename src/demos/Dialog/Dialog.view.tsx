import React from 'react';
import { Anchor } from '../../lib';
import Demo from './Dialog.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubSubTitle, SubTitle, Title } from '../../components/common/Typography';
import { Main } from '../../components/common/Main';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Dialog.constants';

const DialogDemo = () => {
  return (
    <Main>
      <header>
        <Title>Dialog</Title>

        <Paragraph>
          Accessible dialog based on{' '}
          <Anchor href="https://reach.tech/dialog">Reach UI's Dialog</Anchor>.
        </Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { Dialog } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <PropsTable props={PROPS} />

      <section style={{ marginTop: 16 }}>
        <SubSubTitle>Note:</SubSubTitle>
        <Paragraph>
          This component accepts all props from{' '}
          <Anchor href="https://reach.tech/dialog/#dialogoverlay">DialogOverlay props</Anchor>.
          Please refer to the <Anchor href="https://reach.tech">Reach UI docs</Anchor> for more
          information.
        </Paragraph>
      </section>
    </Main>
  );
};

export default DialogDemo;
