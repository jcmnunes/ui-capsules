import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../lib';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Usage from '../Usage/Usage';
import { SubSubTitle, SubTitle } from '../common/Typography';
import { styled } from '../../lib';

export const Booleans = styled('div', {
  display: 'inline-flex',
  flexDirection: 'column',

  '& > *': {
    marginBottom: 8,
  },
});

export const Inputs = styled('div', {
  '& > *': {
    margin: '8px 0',
    maxWidth: 264,
  },
});

export const DemoWrapper = styled('div', {
  borderRadius: '12px',
  backgroundColor: '$neutral100',
  padding: '$3',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
});

export const Display = styled('div', {
  flex: 1,
  background: '$bg',
  borderRadius: '$medium',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$3',

  variants: {
    isDark: {
      true: {
        background: '$neutral400',
      },
    },
  },
});

export const PropAdjuster = styled('div', {
  flex: 1,
  padding: '0 6px 0 18px',
});

const HeaderWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',

  [`${SubTitle}`]: {
    flex: 1,
  },
});

const Actions = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: '$neutral400',
  marginBottom: '$3',

  '&:hover': {
    color: '$neutral700',
  },
});

const Demo = ({ component, code, isDark, codeURL, children }) => {
  return (
    <section>
      <HeaderWrapper>
        <SubTitle>Demo</SubTitle>
        <Actions>
          <Button
            as="a"
            href={codeURL}
            variant="ghostGray"
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
    </section>
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
