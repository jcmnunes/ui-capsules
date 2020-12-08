import React from 'react';
import PropTypes from 'prop-types';
import { Button, theme } from '../../lib';
import styled from '@emotion/styled/macro';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Usage from '../Usage/Usage';
import { SubSubTitle, SubTitle } from '../common/Typography';

export const Booleans = styled.div`
  display: inline-flex;
  flex-direction: column;

  & > * {
    margin-bottom: 8px;
  }
`;

export const Inputs = styled.div`
  & > * {
    margin: 8px 0;
    max-width: 200px;
  }
`;

export const DemoWrapper = styled.div`
  border-radius: 12px;
  background-color: ${props => props.theme.colors.neutral['50']};
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const Display = styled.div`
  flex: 1;
  background: ${props => (props.isDark ? theme.colors.neutral['400'] : 'white')};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
  transition: background-color 0.2s ease;
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
  color: ${props => props.theme.colors.neutral['400']};
  margin-bottom: 12px;

  &:hover {
    color: ${props => props.theme.colors.neutral['700']};
  }
`;

const Demo = ({ component, code, isDark, codeURL, children }) => {
  return (
    <>
      <HeaderWrapper>
        <SubTitle>Demo</SubTitle>
        <Actions>
          <Button
            as="a"
            href={codeURL}
            variant="ghost"
            variantColor="neutral"
            size="medium"
            leftIcon="github"
            iconVariant="outline"
          >
            View source on GitHub
          </Button>
        </Actions>
      </HeaderWrapper>
      <DemoWrapper>
        <Display width="300px" isDark={isDark}>
          {component}
        </Display>
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
      <Usage>
        {code ||
          reactElementToJSXString(component, {
            showDefaultProps: false,
            functionValue: () => 'function',
            filterProps: ['key'],
          })}
      </Usage>
    </>
  );
};

Demo.defaultProps = {
  code: null,
  isDark: false,
};

Demo.propTypes = {
  component: PropTypes.node.isRequired,
  code: PropTypes.string,
  isDark: PropTypes.bool,
  codeURL: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Demo;
