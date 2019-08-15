import React from 'react';
import Demo from './PageSpinner.demo';
import Usage from '../../components/common/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/common/PropsTable';
import { PROPS } from './PageSpinner.constants';

const PageSpinnerDemo = () => {
  return (
    <Wrapper>
      <Title>PageSpinner</Title>
      <Paragraph>
        Renders a full-page spinner. You can pass anything that can be rendered as children. The
        common scenario is to pass the app logo (will be rendered above the spinner).
      </Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { PageSpinner } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default PageSpinnerDemo;
