import React from 'react';
import styled from 'styled-components';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { SubSubTitle } from './Typography';
import Button from '../../lib/Button/Button';
import Usage from './Usage';

export const DemoWrapper = styled.div`
  border-radius: 12px;
  background-color: ${props => props.theme.neutral050};
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const Display = styled.div`
  background: white;
  border-radius: 8px;
  width: ${props => props.width};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

export const PropAdjuster = styled.div`
  flex: 1;
  padding: 0 48px 0 18px;
`;

export const ActionsBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${props => props.theme.neutral400};
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.neutral700};
  }

  & > * {
    margin-top: 8px;
  }
`;

const Demo = ({ component, codeURL, children }) => {
  return (
    <>
      <DemoWrapper>
        <Display width="400px">{component}</Display>
        <PropAdjuster>
          <SubSubTitle>Button props</SubSubTitle>
          {children}
        </PropAdjuster>
        <ActionsBar>
          <Button
            as="a"
            href={codeURL}
            target="_blank"
            size="medium"
            appearance="minimal"
            iconAfter="GITHUB"
          />
        </ActionsBar>
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

export default Demo;
