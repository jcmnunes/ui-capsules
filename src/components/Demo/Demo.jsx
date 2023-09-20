import React from 'react';
import PropTypes from 'prop-types';
import { Button, styled } from '../../lib';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Usage from '../Usage/Usage';
import { SubSubTitle, SubTitle } from '../common/Typography';

export const Booleans = styled.div({
  display: 'inline-flex',
  flexDirection: 'column',

  '& > *': {
    marginBottom: 8,
  },
});

export const Inputs = styled.div({
  '& > *': {
    margin: '8px 0',
    maxWidth: 264,
  },
});

export const DemoWrapper = styled.div(({ theme }) => ({
  borderRadius: '12px',
  backgroundColor: theme.colors.neutral100,
  padding: theme.space[12],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',

  [theme.media.lg]: {
    flexDirection: 'row',
  },
}));

export const Display = styled.div(({ theme, $isDark }) => ({
  flex: 1,
  background: $isDark ? theme.colors.neutral400 : theme.colors.bg,
  borderRadius: theme.radii.medium,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.space[12],
}));

export const PropAdjuster = styled.div({
  flex: 1,
  padding: '0 6px 0 18px',
});

const HeaderWrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',

  [`${SubTitle}`]: {
    flex: 1,
  },
});

const Actions = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: theme.colors.neutral400,
  marginBottom: theme.space[12],

  '&:hover': {
    color: theme.colors.neutral700,
  },
}));

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
        <Display width="300px" $isDark={isDark}>
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
