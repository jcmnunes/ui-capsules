import React, { useState } from 'react';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { Button, Select, Input, Checkbox } from '../../lib';
import { APPEARANCE_OPTS, AS_OPTS, SIZE_OPTS, GITHUB_URL } from './Button.constants';
import { useIconOpts } from '../Icon/Icon.hooks';
import { ButtonAppearance, IconType, SelectOption, ElementSize } from '../../lib/types';

const ButtonDemo = () => {
  const iconOpts = [{ value: '', label: 'none' }, ...useIconOpts()];

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
      iconBefore={(iconBefore.value as IconType) || undefined}
      iconAfter={(iconAfter.value as IconType) || undefined}
    >
      {buttonChildren}
    </Button>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox
          checked={isLoading}
          onChange={() => setIsLoading(!isLoading)}
          appearance="success"
          isDisabled={as.value === 'a' || appearance.value === 'link'}
        >
          <pre>isLoading</pre>
        </Checkbox>
        <Checkbox
          checked={isDisabled}
          onChange={() => setIsDisabled(!isDisabled)}
          appearance="success"
          isDisabled={as.value === 'a' || appearance.value === 'link'}
        >
          <pre>isDisabled</pre>
        </Checkbox>
        <Checkbox checked={isBlock} onChange={() => setIsBlock(!isBlock)} appearance="success">
          <pre>isBlock</pre>
        </Checkbox>
      </Booleans>
      <Inputs>
        <div>
          <pre>children</pre>
          <Input
            type="text"
            value={buttonChildren}
            onChange={ev => setButtonChildren(ev.target.value)}
          />
        </div>
        <div>
          <pre>appearance</pre>
          <Select
            value={appearance}
            options={APPEARANCE_OPTS}
            onChange={opt => setAppearance(opt as SelectOption<ButtonAppearance>)}
          />
        </div>
        <div>
          <pre>size</pre>
          <Select
            value={size}
            options={SIZE_OPTS}
            onChange={opt => setSize(opt as SelectOption<ElementSize>)}
          />
        </div>
        <div>
          <pre>as</pre>
          <Select
            value={as}
            options={AS_OPTS}
            onChange={opt => setAs(opt as SelectOption<'button' | 'a'>)}
          />
        </div>
        <div>
          <pre>iconBefore</pre>
          <Select
            value={iconBefore}
            options={iconOpts}
            onChange={opt => setIconBefore(opt as SelectOption<IconType>)}
            isDisabled={appearance.value === 'link'}
          />
        </div>
        <div>
          <pre>iconAfter</pre>
          <Select
            value={iconAfter}
            options={iconOpts}
            onChange={opt => setIconAfter(opt as SelectOption<IconType>)}
            isDisabled={appearance.value === 'link'}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default ButtonDemo;
