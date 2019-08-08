import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { SubSubTitle, SubTitle } from './Typography';
import Button from '../../lib/Button/Button';
import Usage from './Usage';
import Checkbox from '../../lib/Checkbox/Checkbox';

export const StyledCheckbox = styled(Checkbox)`
  margin: 8px 0;
`;

export const StyledSelect = styled.div`
  margin: 8px 0;
  max-width: 200px;
`;

export const Booleans = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const DemoWrapper = styled.div`
  border-radius: 12px;
  background-color: ${props => props.theme.neutral050};
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const Display = styled.div`
  flex: 1;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

export const PropAdjuster = styled.div`
  flex: 1;
  padding: 0 6px 0 18px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  ${SubTitle} {
    flex: 1;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${props => props.theme.neutral400};
  margin-bottom: 12px;

  &:hover {
    color: ${props => props.theme.neutral700};
  }
`;

const Demo = ({ component, codeURL, children }) => {
  return (
    <>
      <HeaderWrapper>
        <SubTitle>Demo</SubTitle>
        <Actions>
          <Button
            as="a"
            href={codeURL}
            target="_blank"
            size="small"
            appearance="minimal"
            iconBefore="CODE"
          >
            View source on GitHub
          </Button>
        </Actions>
      </HeaderWrapper>
      <DemoWrapper>
        <Display width="300px">{component}</Display>
        <PropAdjuster>
          <SubSubTitle>
            Knobs{' '}
            <span role="img" aria-label="knobs emoji">
              🎛
            </span>
          </SubSubTitle>
          {children}
        </PropAdjuster>
      </DemoWrapper>
      <SubSubTitle>Generated code</SubSubTitle>
      <Usage>
        {reactElementToJSXString(component, {
          showDefaultProps: false,
        })}
      </Usage>
    </>
  );
};

Demo.propTypes = {
  component: PropTypes.node.isRequired,
  codeURL: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Demo;
