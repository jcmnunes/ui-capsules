import React from 'react';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Usage from '../../components/Usage/Usage';
import Wrapper from '../../components/common/Wrapper';
import { Box, Flex } from '../../lib';

export const Editor = () => {
  return (
    <Wrapper as="main" css={{ height: '100%', position: 'relative' }}>
      <Flex direction="column" css={{ height: '100%' }}>
        <section>
          <Title>Editor</Title>
          <Paragraph>The Editor component is available as a separate npm package.</Paragraph>
        </section>

        <section>
          <SubTitle>Usage</SubTitle>
          <Usage>{"import { Editor } from '@binarycapsule/editor';"}</Usage>
        </section>

        <Box css={{ position: 'relative', height: '100vh' }}>
          <iframe
            title="Editor landing page"
            src="https://editor.binarycapsule.tech/"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </Box>
      </Flex>
    </Wrapper>
  );
};
