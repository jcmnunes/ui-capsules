import React, { useState } from 'react';
import Demo from './RadioPicker.demo';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import { Main } from '../../components/common/Main';
import PropsTable from '../../components/PropsTable/PropsTable';
import { EXAMPLE_RADIOS, PROPS } from './RadioPicker.constants';
import { Flex, RadioPicker } from '../../lib';

const ButtonDemo = () => {
  const [checked, setChecked] = useState<number | null>(null);

  return (
    <Main>
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

        <Flex $direction="column" $align="stretch" $gap={16}>
          {EXAMPLE_RADIOS.map(({ id, label, helpText }) => (
            <RadioPicker
              key={id}
              name="example"
              checked={id === checked}
              onChange={() => setChecked(id)}
              label={label}
              helpText={helpText}
            />
          ))}
        </Flex>
      </section>

      <PropsTable props={PROPS} />
    </Main>
  );
};

export default ButtonDemo;
