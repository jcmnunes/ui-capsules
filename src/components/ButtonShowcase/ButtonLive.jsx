import React, { useState } from 'react';
import styled from 'styled-components';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Usage from './Usage';
import { ActionsBar, ComponentDisplay, PropAdjuster, LiveComponent } from '../common';
import SubSubTitle from '../common/SubSubTitle';
import Button from '../../lib/Button/Button';
import Checkbox from '../../lib/Checkbox/Checkbox';
import Icon from '../../lib/Icon/Icon';

const githubUrl = 'https://github.com/jcmnunes/ui-capsules/blob/master/src/lib/Button/Button.jsx';

const StyledCheckbox = styled(Checkbox)`
  margin: 8px 0;
`;

export const Booleans = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const IconCode = styled(Icon).attrs({
  icon: Icon.CODE,
  size: '32px',
})`
  width: 32px;

  .primary {
    fill: ${props => props.theme.neutral050};
    transition: fill 0.2s ease;
  }

  .secondary {
    fill: ${props => props.theme.neutral300};
    transition: fill 0.2s ease;
  }

  &:hover {
    .primary {
      fill: ${props => props.theme.neutral100};
    }

    .secondary {
      fill: ${props => props.theme.neutral600};
    }
  }
`;

const ButtonLive = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [appearance, setAppearance] = useState('secondary');
  const [size, setSize] = useState('medium');
  const [as, setAs] = useState('button');
  const Component = (
    <Button
      isLoading={isLoading}
      isBlock={isBlock}
      isDisabled={isDisabled}
      appearance={appearance}
      size={size}
      as={as}
    >
      Hello
    </Button>
  );
  return (
    <>
      <LiveComponent>
        <ComponentDisplay width="200px">{Component}</ComponentDisplay>
        <PropAdjuster>
          <SubSubTitle>
            Lab{' '}
            <span role="img" aria-label="male scientist emoji">
              👨‍🔬
            </span>{' '}
            <span role="img" aria-label="male scientist emoji">
              👩‍🔬
            </span>
          </SubSubTitle>
          <Booleans>
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
          </Booleans>
          <div>
            <pre>appearance</pre>
            <select value={appearance} onChange={ev => setAppearance(ev.target.value)}>
              <option value="primary">primary</option>
              <option value="secondary">secondary</option>
              <option value="success">success</option>
              <option value="warning">warning</option>
              <option value="error">error</option>
              <option value="dropdown">dropdown</option>
              <option value="link">link</option>
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
          <div>
            <pre>as</pre>
            <select value={as} onChange={ev => setAs(ev.target.value)}>
              <option value="button">button</option>
              <option value="a">a</option>
            </select>
          </div>
        </PropAdjuster>
        <ActionsBar>
          <Button
            as="a"
            href={githubUrl}
            target="_blank"
            size="medium"
            appearance="link"
            iconAfter={<IconCode />}
          />
        </ActionsBar>
      </LiveComponent>
      <SubSubTitle>Generated code</SubSubTitle>
      <Usage>
        {reactElementToJSXString(Component, {
          showDefaultProps: false,
        })}
      </Usage>
    </>
  );
};

export default ButtonLive;
