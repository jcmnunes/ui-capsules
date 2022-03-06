import React from 'react';
import Demo from './Modal.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubSubTitle, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { Anchor } from '../../lib';
import { PROPS } from './Modal.constants';

const ModalDemo = () => {
  return (
    <Wrapper as="main">
      <header>
        <Title>Modal</Title>
        <Paragraph>
          Accessible modal based on{' '}
          <Anchor href="https://reach.tech/dialog">Reach UI's Dialog</Anchor>.
        </Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>
          {
            "import { Modal, ModalBody, ModalTitle, ModalFooter } from '@binarycapsule/ui-capsules';"
          }
        </Usage>
      </section>

      <Demo />

      <PropsTable props={PROPS} />

      <section>
        <SubSubTitle>Note:</SubSubTitle>
        <Paragraph>
          This component accepts all props from{' '}
          <Anchor href="https://reach.tech/dialog/#dialogoverlay">DialogOverlay props</Anchor>.
          Please refer to the <Anchor href="https://reach.tech">Reach UI docs</Anchor> for more
          information.
        </Paragraph>
      </section>
    </Wrapper>
  );
};

export default ModalDemo;
