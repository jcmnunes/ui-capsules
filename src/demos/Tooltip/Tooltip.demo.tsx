import React, { useState } from 'react';
import { Button, Input, Tooltip } from '../../lib';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL } from './Tooltip.constants';

const TooltipDemo = () => {
  const [label, setLabel] = useState('Tooltip text');

  const Component = (
    <Tooltip label={label}>
      <Button leftIcon="eye">Hover over me</Button>
    </Tooltip>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Inputs>
        <div>
          <Input label="label" value={label} onChange={ev => setLabel(ev.target.value)} />
        </div>
      </Inputs>
    </Demo>
  );
};

export default TooltipDemo;
