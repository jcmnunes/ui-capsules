import React from 'react';
import Demo from './Modal.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubSubTitle, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { Anchor } from '../../lib';
import { PROPS } from './Modal.constants';
import { setAppElementExample } from '../../components/Home/Home';

const ModalDemo = () => {
  return (
    <Wrapper>
      <Title>Modal</Title>
      <Paragraph>
        Accessible modal based on{' '}
        <Anchor href="http://reactcommunity.org/react-modal">react-modal</Anchor>.
      </Paragraph>

      <SubTitle>Usage</SubTitle>
      <Usage>
        {"import { Modal, ModalBody, ModalTitle, ModalFooter } from '@binarycapsule/ui-capsules';"}
      </Usage>

      <Paragraph>
        To improve A11y, at the entry point of the app call the <code>setAppElement</code> method
        with a query selector identifying the root of your app.
      </Paragraph>

      <Usage>{setAppElementExample}</Usage>
      <Paragraph>
        See{' '}
        <Anchor href="http://reactcommunity.org/react-modal/accessibility/#app-element">
          react-modal docs
        </Anchor>{' '}
        for more information.
      </Paragraph>

      <Demo />

      <SubTitle>Props</SubTitle>
      <PropsTable props={PROPS} />

      <SubSubTitle>Note:</SubSubTitle>
      <Paragraph>
        This component accepts all props from the{' '}
        <Anchor href="http://reactcommunity.org/react-modal">react-modal API</Anchor>. Please refer
        to the <Anchor href="http://reactcommunity.org/react-modal/#usage">docs</Anchor> for more
        information.
      </Paragraph>
    </Wrapper>
  );
};

export default ModalDemo;
