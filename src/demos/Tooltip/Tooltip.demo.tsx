import React, { useState } from 'react';
import { Button, Input, Select, SelectOption, Tooltip } from '../../lib';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, PLACEMENT_OPTS, TooltipPlacementOptions } from './Tooltip.constants';

const TooltipDemo = () => {
  const [content, setContent] = useState('Tooltip text');
  const [delayShow, setDelayShow] = useState(300);
  const [placement, setPlacement] = useState(PLACEMENT_OPTS[0]);

  const Component = (
    <Tooltip content={content} placement={placement.value} delay={[delayShow, 0]}>
      <Button leftIcon="eye">Hover over me</Button>
    </Tooltip>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Inputs>
        <div>
          <pre>delay</pre>
          <Input
            value={delayShow}
            type="number"
            step={100}
            onChange={ev => setDelayShow(parseFloat(ev.target.value))}
          />
        </div>

        <div>
          <pre>content</pre>
          <Input value={content} onChange={ev => setContent(ev.target.value)} />
        </div>

        <div>
          <pre>placement</pre>
          <Select
            value={placement}
            options={PLACEMENT_OPTS}
            onChange={opt => setPlacement(opt as SelectOption<TooltipPlacementOptions>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default TooltipDemo;
