import React from 'react';
import Demo from './Select.demo';
import Usage from '../../components/common/Usage';
import { Paragraph, SubSubTitle, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/common/PropsTable';
import { SELECT_PROPS } from './Select.constants';
import Button from '../../lib/Button/Button';

const ButtonDemo = () => {
  return (
    <Wrapper>
      <Title>Select</Title>
      <Paragraph>Select (based on react-select)</Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { Select } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={SELECT_PROPS} />
      <SubSubTitle>Note:</SubSubTitle>
      <Paragraph>
        This component accepts all props from the{' '}
        <Button as="a" appearance="link" href="https://react-select.com/props" target="_blank">
          react-select API
        </Button>
        . Please refer to the{' '}
        <Button as="a" appearance="link" href="https://react-select.com/props" target="_blank">
          docs
        </Button>{' '}
        for more information.
      </Paragraph>
    </Wrapper>
  );
};

export default ButtonDemo;
