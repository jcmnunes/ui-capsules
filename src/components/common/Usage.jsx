import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '../../lib/Button/Button';
import Toaster from '../../lib/Toaster/Toaster';

export const StyledUsage = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${props => props.theme.neutral050};
  border-radius: 12px;
`;

const Code = styled.pre`
  flex: 1;
  padding: 32px;
  width: 100%;
  overflow-x: auto;
`;

export const Actions = styled.div`
  margin-top: 4px;
  padding: 0 8px;
  color: ${props => props.theme.neutral400};

  &:hover {
    color: ${props => props.theme.neutral700};
  }
`;

const Usage = ({ children }) => {
  return (
    <>
      <StyledUsage>
        <Code>
          <code>{children}</code>
        </Code>
      </StyledUsage>
      <Actions>
        <CopyToClipboard
          text={children}
          onCopy={() => {
            if (Toaster.getToasts().length === 0) {
              Toaster.success({
                title: 'Done!',
                message: 'Text copied to clipboard',
              });
            }
          }}
        >
          <Button size="small" appearance="minimal" iconBefore="COPY">
            Copy to clipboard
          </Button>
        </CopyToClipboard>
      </Actions>
    </>
  );
};

Usage.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Usage;
