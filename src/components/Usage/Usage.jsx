import React, { useState } from 'react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../../lib';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Wrapper = styled.div({
  margin: '24px 0',
});

const StyledUsage = styled.div(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  background: theme.colors.neutral100,
  borderRadius: '12px',
  overflow: 'hidden',
}));

const Code = styled.pre({
  flex: 1,
  padding: 32,
  width: '100%',
  overflowX: 'auto',
});

const StyledCode = styled.code(({ theme }) => ({
  color: theme.colors.neutral700,
}));

const Actions = styled.div(({ theme }) => ({
  marginTop: 4,
  padding: '0 8px 0',
  color: theme.colors.neutral400,

  '&:hover': {
    color: theme.colors.neutral700,
  },
}));

const Usage = ({ children }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <Wrapper>
      <StyledUsage>
        <Code>
          <StyledCode>{children}</StyledCode>
        </Code>
      </StyledUsage>

      <Actions>
        <CopyToClipboard
          text={children}
          onCopy={() => {
            if (!isCopied) {
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 1000);
            }
          }}
        >
          <Button size="small" leftIcon="duplicate" iconVariant="outline" variant="ghostGray">
            {isCopied ? 'Copied!' : 'Copy'}
          </Button>
        </CopyToClipboard>
      </Actions>
    </Wrapper>
  );
};

Usage.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Usage;
