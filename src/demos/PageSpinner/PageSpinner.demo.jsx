import React, { useState } from 'react';
import Demo, { StyledSelect } from '../../components/Demo/Demo';
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
    <Button onClick={handleShowSpinnerClick} appearance="primary" iconBefore="eye">
      Show PageSpinner
    </Button>
  );

  const code = `<PageSpinner>{children}</PageSpinner>`;

  return (
    <Demo codeURL={GITHUB_URL} component={isVisible ? Component : Launcher} code={code}>
      <>
        <StyledSelect>
          <pre>children</pre>
          <Input value={children} onChange={ev => setChildren(ev.target.value)} />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default PageSpinnerDemo;
