import React, { useState } from 'react';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, PLACEMENT_OPTS, TRIGGER_OPTS } from './Tooltip.constants';
import { Tooltip, Button, Select, Input, Checkbox } from '../../lib';
import { SelectOption } from '../../lib/types';
import { TooltipPlacementOptions, TooltipTriggerOptions } from '../../lib/Tooltip/Tooltip';

const trigger2ButtonText = {
  hover: 'Hover over me',
  click: 'Click me',
  'right-click': 'Right click me',
  none: "No tooltip :'(",
};

const TooltipDemo = () => {
  const [followCursor, setFollowCursor] = useState(false);
  const [tooltip, setTooltip] = useState('Tooltip text');
  const [delayShow, setDelayShow] = useState(300);
  const [placement, setPlacement] = useState(PLACEMENT_OPTS[0]);
  const [trigger, setTrigger] = useState(TRIGGER_OPTS[0]);

  const Component = (
    <Tooltip
      tooltip={tooltip}
      placement={placement.value}
      delayShow={delayShow}
      followCursor={followCursor}
      trigger={trigger.value}
    >
      <Button appearance="primary" iconBefore="eye">
        {trigger2ButtonText[trigger.value]}
      </Button>
    </Tooltip>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox
          checked={followCursor}
          onChange={() => setFollowCursor(!followCursor)}
          appearance="success"
        >
          <pre>followCursor</pre>
        </Checkbox>
      </Booleans>
      <Inputs>
        <div>
          <pre>delayShow</pre>
          <Input
            value={delayShow}
            type="number"
            step={100}
            onChange={ev => setDelayShow(parseFloat(ev.target.value))}
          />
        </div>
        <div>
          <pre>tooltip</pre>
          <Input value={tooltip} onChange={ev => setTooltip(ev.target.value)} />
        </div>
        <div>
          <pre>placement</pre>
          <Select
            value={placement}
            options={PLACEMENT_OPTS}
            onChange={opt => setPlacement(opt as SelectOption<TooltipPlacementOptions>)}
          />
        </div>
        <div>
          <pre>trigger</pre>
          <Select
            value={trigger}
            options={TRIGGER_OPTS}
            onChange={opt => setTrigger(opt as SelectOption<TooltipTriggerOptions>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default TooltipDemo;
