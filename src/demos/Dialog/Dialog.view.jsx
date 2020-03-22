import React from 'react';
import Demo from './Dialog.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubSubTitle, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { Anchor } from '../../lib/Anchor/Anchor';
import { exampleAppElement, PROPS } from './Dialog.constants';

const DialogDemo = () => {
  return (
    <Wrapper>
      <Title>Dialog</Title>
      <Paragraph>
        Accessible dialog based on{' '}
        <Anchor href="http://reactcommunity.org/react-modal">react-modal</Anchor>.
      </Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Dialog } from '@binarycapsule/ui-capsules';"}</Usage>
      <Paragraph>
        To improve A11y, at the entry point of the app call the <code>setAppElement</code> method
        with a query selector identifying the root of your app.
      </Paragraph>
      <Usage>{exampleAppElement}</Usage>
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

export default DialogDemo;
