import React from 'react';
import { Box, Button, Flex } from '../../lib';
import Demo from './Button.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import { Main } from '../../components/common/Main';
import PropsTable from '../../components/PropsTable/PropsTable';
import { PROPS } from './Button.constants';

const ButtonDemo = () => {
  return (
    <Main>
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
        <SubTitle>Variants</SubTitle>

        <Flex $align="baseline" css={{ marginBottom: 24 }}>
          {['primary', 'secondary', 'error', 'ghost', 'ghostGray', 'link'].map(variant => (
            <Box key={variant} css={{ marginRight: 12 }}>
              <Button variant={variant}>
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Button>
            </Box>
          ))}
        </Flex>
      </section>

      <Demo />

      <PropsTable props={PROPS} />
    </Main>
  );
};

export default ButtonDemo;
