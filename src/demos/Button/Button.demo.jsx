import React, { useState } from 'react';
import Demo, { Booleans, StyledCheckbox, StyledSelect } from '../../components/Demo/Demo';
import { Button } from '../../lib/Button/Button';
import { Select } from '../../lib/Select/Select';
import { Input } from '../../lib/Input/Input';
import { APPEARANCE_OPTS, AS_OPTS, SIZE_OPTS, GITHUB_URL } from './Button.constants';
import { useIconOpts } from '../Icon/Icon.hooks';

const ButtonDemo = () => {
  const iconOpts = [{ value: undefined, label: 'none' }, ...useIconOpts()];

  const [isLoading, setIsLoading] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonChildren, setButtonChildren] = useState('Hello');
  const [appearance, setAppearance] = useState(APPEARANCE_OPTS[1]);
  const [size, setSize] = useState(SIZE_OPTS[1]);
  const [as, setAs] = useState(AS_OPTS[0]);
  const [iconBefore, setIconBefore] = useState(iconOpts[0]);
  const [iconAfter, setIconAfter] = useState(iconOpts[0]);

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
            appearance="success"
            isDisabled={as.value === 'a' || appearance.value === 'link'}
          >
            <pre>isLoading</pre>
          </StyledCheckbox>
          <StyledCheckbox
            checked={isDisabled}
            onChange={() => setIsDisabled(!isDisabled)}
            appearance="success"
            isDisabled={as.value === 'a' || appearance.value === 'link'}
          >
            <pre>isDisabled</pre>
          </StyledCheckbox>
          <StyledCheckbox
            checked={isBlock}
            onChange={() => setIsBlock(!isBlock)}
            appearance="success"
          >
            <pre>isBlock</pre>
          </StyledCheckbox>
        </Booleans>
        <StyledSelect>
          <pre>children</pre>
          <Input
            type="text"
            value={buttonChildren}
            onChange={ev => setButtonChildren(ev.target.value)}
          />
        </StyledSelect>
        <StyledSelect>
          <pre>appearance</pre>
          <Select
            value={appearance}
            options={APPEARANCE_OPTS}
            onChange={opt => setAppearance(opt)}
          />
        </StyledSelect>
        <StyledSelect>
          <pre>size</pre>
          <Select value={size} options={SIZE_OPTS} onChange={opt => setSize(opt)} />
        </StyledSelect>
        <StyledSelect>
          <pre>as</pre>
          <Select value={as} options={AS_OPTS} onChange={opt => setAs(opt)} />
        </StyledSelect>
        <StyledSelect>
          <pre>iconBefore</pre>
          <Select
            value={iconBefore}
            options={iconOpts}
            onChange={opt => setIconBefore(opt)}
            isDisabled={appearance.value === 'link'}
          />
        </StyledSelect>
        <StyledSelect>
          <pre>iconAfter</pre>
          <Select
            value={iconAfter}
            options={iconOpts}
            onChange={opt => setIconAfter(opt)}
            isDisabled={appearance.value === 'link'}
          />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default ButtonDemo;
