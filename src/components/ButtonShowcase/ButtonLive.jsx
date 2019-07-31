import React, { useState } from 'react';
import styled from 'styled-components';
import { ActionsBar, ComponentDisplay, PropAdjuster, LiveComponent } from '../common';
import SubSubTitle from '../common/SubSubTitle';
import Button from '../../lib/Button/Button';
import Checkbox from '../../lib/Checkbox/Checkbox';
import reactElementToJSXString from 'react-element-to-jsx-string';

const StyledCheckbox = styled(Checkbox)`
  margin: 8px 0;
`;

const ButtonLive = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [appearance, setAppearance] = useState('secondary');
  const [size, setSize] = useState('medium');
  return (
    <>
      <LiveComponent>
        <ComponentDisplay width="200px">
          <Button
            isLoading={isLoading}
            isBlock={isBlock}
            isDisabled={isDisabled}
            appearance={appearance}
            size={size}
          >
            Hello
          </Button>
        </ComponentDisplay>
        <PropAdjuster>
          <SubSubTitle>
            Lab{' '}
            <span role="img" aria-label="male scientist emoji">
              👨‍🔬
            </span>{' '}
            <span role="img" aria-label="male scientist emoji">
              👩‍🔬
            </span>
            <div>
              <StyledCheckbox
                checked={isLoading}
                onChange={() => setIsLoading(!isLoading)}
                intent="success"
              >
                <pre>isLoading</pre>
              </StyledCheckbox>
              <StyledCheckbox
                checked={isDisabled}
                onChange={() => setIsDisabled(!isDisabled)}
                intent="success"
              >
                <pre>isDisabled</pre>
              </StyledCheckbox>
              <StyledCheckbox
                checked={isBlock}
                onChange={() => setIsBlock(!isBlock)}
                intent="success"
              >
                <pre>isBlock</pre>
              </StyledCheckbox>
            </div>
            <div>
              <pre>appearance</pre>
              <select value={appearance} onChange={ev => setAppearance(ev.target.value)}>
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="success">success</option>
                <option value="warning">warning</option>
                <option value="error">error</option>
                <option value="dropdown">dropdown</option>
              </select>
            </div>
            <div>
              <pre>size</pre>
              <select value={size} onChange={ev => setSize(ev.target.value)}>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select>
            </div>
          </SubSubTitle>
        </PropAdjuster>
        <ActionsBar>
          <Button>{'</>'}</Button>
        </ActionsBar>
      </LiveComponent>
      <pre>
        {reactElementToJSXString(
          <Button
            isLoading={isLoading}
            isBlock={isBlock}
            isDisabled={isDisabled}
            appearance={appearance}
            size={size}
          >
            Hello
          </Button>,
          {
            showDefaultProps: false,
          },
        )}
      </pre>
    </>
  );
};

export default ButtonLive;
