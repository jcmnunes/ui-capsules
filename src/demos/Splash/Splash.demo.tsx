import React, { useState } from 'react';
import { Button, Checkbox, Input, Select, SelectOption, Splash } from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, SPLASH_VARIANT_OPTS } from './Splash.constants';
import { SplashVariant } from '../../lib/Splash/Splash';

const SplashDemo = () => {
  const [variant, setVariant] = useState(SPLASH_VARIANT_OPTS[0]);
  const [showSpinner, setShowSpinner] = useState(true);
  const [children, setChildren] = useState('Logo as children');
  const [isVisible, setIsVisible] = useState(false);

  const handleShowSpinnerClick = () => {
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  const Component = (
    <Splash showSpinner={showSpinner} variant={variant.value}>
      {children}
    </Splash>
  );

  const Launcher = (
    <Button onClick={handleShowSpinnerClick} leftIcon="eye">
      Show Splash
    </Button>
  );

  const code = `<Splash>{children}</Splash>`;

  return (
    <Demo codeURL={GITHUB_URL} component={isVisible ? Component : Launcher} code={code}>
      <Booleans>
        <Checkbox checked={showSpinner} onChange={() => setShowSpinner(!showSpinner)}>
          <pre>showSpinner</pre>
        </Checkbox>
      </Booleans>

      <Inputs>
        <div>
          <pre>variant</pre>
          <Select
            value={variant}
            options={SPLASH_VARIANT_OPTS}
            onChange={opt => setVariant(opt as SelectOption<SplashVariant>)}
          />
        </div>

        <div>
          <pre>children</pre>
          <Input value={children} onChange={ev => setChildren(ev.target.value)} />
        </div>
      </Inputs>
    </Demo>
  );
};

export default SplashDemo;
