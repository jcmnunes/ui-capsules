import React, { useState } from 'react';
import styled from 'styled-components';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Select from 'react-select';
import Button from '../../lib/Button/Button';
import Checkbox from '../../lib/Checkbox/Checkbox';
import Icon from '../../lib/Icon/Icon';
import { ActionsBar, DemoWrapper, Display, PropAdjuster } from '../common/Demo';
import Usage from '../common/Usage';
import { SubSubTitle } from '../common/Typography';
import { APPEARANCE_OPTS, AS_OPTS, SIZE_OPTS, GITHUB_URL } from './Button.constants';

const StyledCheckbox = styled(Checkbox)`
  margin: 8px 0;
`;

const StyledSelect = styled.div`
  margin: 8px 0;
  max-width: 200px;
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
  const [appearance, setAppearance] = useState(APPEARANCE_OPTS[1]);
  const [size, setSize] = useState(SIZE_OPTS[1]);
  const [as, setAs] = useState(AS_OPTS[0]);

  const Component = (
    <Button
      as={as.value}
      isLoading={isLoading}
      isBlock={isBlock}
      isDisabled={isDisabled}
      appearance={appearance.value}
      size={size.value}
    >
      Hello
    </Button>
  );

  return (
    <>
      <DemoWrapper>
        <Display width="400px">{Component}</Display>
        <PropAdjuster>
          <SubSubTitle>Button props</SubSubTitle>
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
            <StyledCheckbox
              checked={isBlock}
              onChange={() => setIsBlock(!isBlock)}
              intent="success"
            >
              <pre>isBlock</pre>
            </StyledCheckbox>
          </Booleans>
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
            <Select
              defaultValue={SIZE_OPTS[0]}
              options={SIZE_OPTS}
              onChange={opt => setSize(opt)}
            />
          </StyledSelect>
          <StyledSelect>
            <pre>as</pre>
            <Select defaultValue={AS_OPTS[0]} options={AS_OPTS} onChange={opt => setAs(opt)} />
          </StyledSelect>
        </PropAdjuster>
        <ActionsBar>
          <Button
            as="a"
            href={GITHUB_URL}
            target="_blank"
            size="medium"
            appearance="link"
            iconAfter={<IconCode />}
          />
        </ActionsBar>
      </DemoWrapper>
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
