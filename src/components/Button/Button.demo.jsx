import React, { useState } from 'react';
import Select from 'react-select';
import Button from '../../lib/Button/Button';
import { APPEARANCE_OPTS, AS_OPTS, SIZE_OPTS, GITHUB_URL, ICON_OPTS } from './Button.constants';
import Demo, { Booleans, StyledCheckbox, StyledSelect } from '../common/Demo';

const ButtonDemo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonChildren, setButtonChildren] = useState('Hello');
  const [appearance, setAppearance] = useState(APPEARANCE_OPTS[1]);
  const [size, setSize] = useState(SIZE_OPTS[1]);
  const [as, setAs] = useState(AS_OPTS[0]);
  const [iconBefore, setIconBefore] = useState(ICON_OPTS[0]);
  const [iconAfter, setIconAfter] = useState(ICON_OPTS[0]);

  const Component = (
    <Button
      as={as.value}
      isLoading={isLoading}
      isBlock={isBlock}
      isDisabled={isDisabled}
      appearance={appearance.value}
      size={size.value}
      iconBefore={iconBefore.value}
      iconAfter={iconAfter.value}
    >
      {buttonChildren}
    </Button>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <>
        <Booleans>
          <StyledCheckbox
            checked={isLoading}
            onChange={() => setIsLoading(!isLoading)}
            intent="success"
            disabled={as.value === 'a'}
          >
            <pre>isLoading</pre>
          </StyledCheckbox>
          <StyledCheckbox
            checked={isDisabled}
            onChange={() => setIsDisabled(!isDisabled)}
            intent="success"
            disabled={as.value === 'a'}
          >
            <pre>isDisabled</pre>
          </StyledCheckbox>
          <StyledCheckbox checked={isBlock} onChange={() => setIsBlock(!isBlock)} intent="success">
            <pre>isBlock</pre>
          </StyledCheckbox>
        </Booleans>
        <StyledSelect>
          <pre>children</pre>
          <input
            type="text"
            value={buttonChildren}
            onChange={ev => setButtonChildren(ev.target.value)}
          />
        </StyledSelect>
        <StyledSelect>
          <pre>appearance</pre>
          <Select
            defaultValue={APPEARANCE_OPTS[1]}
            options={APPEARANCE_OPTS}
            onChange={opt => setAppearance(opt)}
          />
        </StyledSelect>
        <StyledSelect>
          <pre>size</pre>
          <Select defaultValue={SIZE_OPTS[1]} options={SIZE_OPTS} onChange={opt => setSize(opt)} />
        </StyledSelect>
        <StyledSelect>
          <pre>as</pre>
          <Select defaultValue={AS_OPTS[0]} options={AS_OPTS} onChange={opt => setAs(opt)} />
        </StyledSelect>
        <StyledSelect>
          <pre>iconBefore</pre>
          <Select
            defaultValue={ICON_OPTS[0]}
            options={ICON_OPTS}
            onChange={opt => setIconBefore(opt)}
          />
        </StyledSelect>
        <StyledSelect>
          <pre>iconAfter</pre>
          <Select
            defaultValue={ICON_OPTS[0]}
            options={ICON_OPTS}
            onChange={opt => setIconAfter(opt)}
          />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default ButtonDemo;
