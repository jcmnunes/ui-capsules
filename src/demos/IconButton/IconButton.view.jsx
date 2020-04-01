import React from 'react';
import { Link } from 'react-router-dom';
import Demo from './IconButton.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './IconButton.constants';
import { Button } from '../../lib';

const AnchorDemo = () => {
  return (
    <Wrapper>
      <Title>IconButton</Title>
      <Paragraph>
        Renders an IconButton using icons from the{' '}
        <Link to="/illustrated-icon">
          <Button as="span" appearance="link">
            IllustratedIcon collection
          </Button>
        </Link>
        .
      </Paragraph>
      <SubTitle>Usage</SubTitle>
      <Usage>{"import { IconButton } from '@binarycapsule/ui-capsules';"}</Usage>
      <Demo />
      <SubTitle>Props</SubTitle>
      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default AnchorDemo;
