import React, { useState } from 'react';
import Demo, { Booleans, StyledCheckbox, StyledSelect } from '../../components/Demo/Demo';
import { GITHUB_URL, PLACEMENT_OPTS, TRIGGER_OPTS } from './Tooltip.constants';
import Tooltip from '../../lib/Tooltip/Tooltip';
import Button from '../../lib/Button/Button';
import Select from '../../lib/Select/Select';
import Input from '../../lib/Input/Input';

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
      <Button appearance="primary" iconBefore="BELL">
        Tooltip trigger
      </Button>
    </Tooltip>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <>
        <Booleans>
          <StyledCheckbox
            checked={followCursor}
            onChange={() => setFollowCursor(!followCursor)}
            appearance="success"
          >
            <pre>followCursor</pre>
          </StyledCheckbox>
        </Booleans>
        <StyledSelect>
          <pre>delayShow</pre>
          <Input
            value={delayShow}
            type="number"
            step={100}
            onChange={ev => setDelayShow(ev.target.value)}
          />
        </StyledSelect>
        <StyledSelect>
          <pre>tooltip</pre>
          <Input value={tooltip} onChange={ev => setTooltip(ev.target.value)} />
        </StyledSelect>
        <StyledSelect>
          <pre>placement</pre>
          <Select value={placement} options={PLACEMENT_OPTS} onChange={opt => setPlacement(opt)} />
        </StyledSelect>
        <StyledSelect>
          <pre>trigger</pre>
          <Select value={trigger} options={TRIGGER_OPTS} onChange={opt => setTrigger(opt)} />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default TooltipDemo;