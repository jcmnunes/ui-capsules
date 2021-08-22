import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../lib';
import styled from '@emotion/styled/macro';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Wrapper = styled.div`
  margin: 24px 0;
`;

const StyledUsage = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${props => props.theme.colors.neutral['100']};
  border-radius: 12px;
`;

const Code = styled.pre`
  flex: 1;
  padding: 32px;
  width: 100%;
  overflow-x: auto;
`;

const Actions = styled.div`
  margin-top: 4px;
  padding: 0 8px 0;
  color: ${props => props.theme.colors.neutral['400']};

  &:hover {
    color: ${props => props.theme.colors.neutral['700']};
  }
`;

const Usage = ({ children }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <Wrapper>
      <StyledUsage>
        <Code>
          <code>{children}</code>
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
          <Button
            size="small"
            leftIcon="duplicate"
            iconVariant="outline"
            variantColor="neutral"
            variant="ghost"
          >
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
