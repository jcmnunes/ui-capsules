import React, { useState } from 'react';
import Demo from './RadioPicker.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import Wrapper from '../../components/common/Wrapper';
import PropsTable from '../../components/PropsTable/PropsTable';
import { EXAMPLE_RADIOS, PROPS } from './RadioPicker.constants';
import { Box, RadioPicker } from '../../lib';

const ButtonDemo = () => {
  const [checked, setChecked] = useState<number | null>(null);

  return (
    <Wrapper as="main">
      <header>
        <Title>RadioPicker</Title>
        <Paragraph>Renders a custom radio picker component.</Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{"import { RadioPicker } from '@binarycapsule/ui-capsules';"}</Usage>
      </section>

      <Demo />

      <section>
        <SubTitle>Example</SubTitle>

        <Box display="flex" flexDirection="column">
          {EXAMPLE_RADIOS.map(({ id, label, helpText }) => (
            <RadioPicker
              key={id}
              checked={id === checked}
              onChange={() => setChecked(id)}
              label={label}
              helpText={helpText}
              mb="16"
            />
          ))}
        </Box>
      </section>

      <PropsTable props={PROPS} />
    </Wrapper>
  );
};

export default ButtonDemo;
