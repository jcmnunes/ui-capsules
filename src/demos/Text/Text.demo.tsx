import React, { useState } from 'react';
import { Input, Select, SelectOption, Text } from '../../lib';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, TEXT_VARIANT_OPTS } from './Text.constants';
import { TextVariant } from '../../lib/Text/Text';

const TooltipDemo = () => {
  const [children, setChildren] = useState('Lorem ipsum');
  const [variant, setVariant] = useState(TEXT_VARIANT_OPTS[0]);

  const Component = <Text variant={variant.value}>{children}</Text>;

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Inputs>
        <div>
          <Input label="children" value={children} onChange={ev => setChildren(ev.target.value)} />
        </div>

        <div>
          <Select
            label="variant"
            value={variant}
            options={TEXT_VARIANT_OPTS}
            onChange={opt => setVariant(opt as SelectOption<TextVariant>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default TooltipDemo;
