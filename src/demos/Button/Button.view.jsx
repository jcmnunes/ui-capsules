import React from 'react';
import { Box, Button, Flex } from '../../lib';
import Demo from './Button.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Button.constants';

const ButtonDemo = () => {
  return (
    <Wrapper as="main">
      <header>
        <Title>Button</Title>
        <Paragraph>
          This component can render a large variety of buttons. Use the Demo below to generate the
          desired button type.
        </Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { Button } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <section>
        <SubTitle>All</SubTitle>
        <Flex alignItems="flex-start" flexDirection="column">
          {[
            'primary',
            'error',
            'neutral',
            'pink',
            'yellow',
            'indigo',
            'green',
            'purple',
            'orange',
            'teal',
          ].map(variantColor => (
            <Flex alignItems="center" mb="24" flexDirection="row">
              {['solid', 'outline', 'ghost', 'link'].map(variant => (
                <Box mr="12">
                  <Button variant={variant} variantColor={variantColor}>
                    {variant} {variantColor}
                  </Button>
                </Box>
              ))}
            </Flex>
          ))}
        </Flex>
      </section>

      <Demo />

      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default ButtonDemo;
