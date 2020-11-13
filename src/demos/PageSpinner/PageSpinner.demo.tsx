import React, { useState } from 'react';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { PageSpinner, Input, Button } from '../../lib';
import { GITHUB_URL } from './PageSpinner.constants';

const PageSpinnerDemo = () => {
  const [children, setChildren] = useState('Logo as children');
  const [isVisible, setIsVisible] = useState(false);

  const handleShowSpinnerClick = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  const Component = <PageSpinner>{children}</PageSpinner>;
  const Launcher = (
    <Button onClick={handleShowSpinnerClick} leftIcon="eye">
      Show PageSpinner
    </Button>
  );

  const code = `<PageSpinner>{children}</PageSpinner>`;

  return (
    <Demo codeURL={GITHUB_URL} component={isVisible ? Component : Launcher} code={code}>
      <Inputs>
        <div>
          <pre>children</pre>
          <Input value={children} onChange={ev => setChildren(ev.target.value)} />
        </div>
      </Inputs>
    </Demo>
  );
};

export default PageSpinnerDemo;
