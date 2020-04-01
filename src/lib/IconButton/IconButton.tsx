import React, { FC } from 'react';
import styled from 'styled-components';
import { IllustratedIcon } from '../IllustratedIcon/IllustratedIcon';
import { Spinner } from '../Spinner/Spinner';
import { theme } from '../theme';
import { IllustratedIconType } from '../types';

const StyledIllustratedIcon = styled(IllustratedIcon)<{ colors: string[] }>`
  .ui-capsules-icon-primary {
    fill: ${({ colors }) => colors[0]};
  }

  .ui-capsules-icon-secondary {
    fill: ${({ colors }) => colors[1]};
  }
`;

interface StyledButtonProps {
  text: string;
  size: string;
  disabled: boolean;
  isBlock: boolean;
  isLoading: boolean;
  hasBackground: boolean;
  isRound: boolean;
  colors: string[];
  textColor: string;
}
const StyledButton = styled.button<StyledButtonProps>`
  height: ${({ text, hasBackground, isRound, size }) =>
    size !== '24px' ? size : isRound ? '36px' : text || hasBackground ? '32px' : '24px'};
  padding: ${({ text, hasBackground, isRound }) =>
    isRound || text ? '0 8px' : hasBackground ? '0 4px' : 0};
  color: ${({ textColor }) => textColor};
  display: flex;
  align-items: center;
  font-size: 16px;
  position: relative;
  opacity: ${({ disabled, isLoading }) => (disabled && !isLoading ? 0.5 : 1)};
  background: ${props => (props.isLoading ? theme.neutral050 : 'none')};
  width: ${props => (props.isBlock ? '100%' : 'auto')};
  border-radius: ${props => (props.isRound ? '999px' : '4px')};

  &:hover {
    background: ${({ colors, text, hasBackground }) =>
      text || hasBackground ? colors[4] || theme.neutral075 : 'none'};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${theme.neutral050};
  }
`;

interface ContentProps {
  isLoading: boolean;
  colors: string[];
  text: string;
  hasBackground: boolean;
  isDisabled: boolean;
}

const Content = styled.div<ContentProps>`
  visibility: ${({ isLoading }) => (isLoading ? 'hidden' : 'visible')};
  display: inline-flex;
  align-items: center;
  white-space: nowrap;

  &:hover {
    .ui-capsules-icon-primary {
      fill: ${({ colors, text, hasBackground, isDisabled }) =>
        text || hasBackground || isDisabled
          ? colors[0] || theme.neutral200
          : colors[2] || theme.neutral300};
    }

    .ui-capsules-icon-secondary {
      fill: ${({ colors, text, hasBackground, isDisabled }) =>
        text || hasBackground || isDisabled
          ? colors[1] || theme.neutral600
          : colors[3] || theme.neutral700};
    }
  }
`;

const SpinnerWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 18px;
`;

const Text = styled.span`
  margin-left: 4px;
`;

interface Props {
  icon: IllustratedIconType;
  type?: 'button' | 'submit';
  text?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isBlock?: boolean;
  isRound?: boolean;
  hasChev?: boolean;
  hasBackground?: boolean;
  colors?: string[];
  textColor?: string;
  size?: string;
}

export const IconButton: FC<Props> = ({
  icon,
  type = 'button',
  text = '',
  colors = [],
  isLoading = false,
  isDisabled = false,
  isBlock = false,
  hasBackground = false,
  isRound = false,
  hasChev = false,
  textColor = theme.neutral700,
  size = '24px',
  ...other
}) => (
  <StyledButton
    type={type}
    text={text}
    size={size}
    disabled={isDisabled || isLoading}
    isBlock={isBlock}
    isLoading={isLoading}
    hasBackground={hasBackground}
    isRound={isRound}
    colors={colors}
    textColor={textColor}
    {...other}
  >
    {isLoading && (
      <SpinnerWrapper>
        <Spinner size="medium" appearance="dark" />
      </SpinnerWrapper>
    )}
    <Content
      colors={colors}
      text={text}
      hasBackground={hasBackground}
      isLoading={isLoading}
      isDisabled={isDisabled}
    >
      <StyledIllustratedIcon icon={icon} colors={colors} size={size} />
      {!!text && <Text>{text}</Text>}
      {hasChev && <IllustratedIcon icon="CHEV_DOWN" />}
    </Content>
  </StyledButton>
);
IconButton.displayName = 'IconButton';

IconButton.defaultProps = {
  type: 'button',
  isLoading: false,
  isDisabled: false,
  hasBackground: false,
  isBlock: false,
  isRound: false,
  hasChev: false,
  text: '',
  textColor: theme.neutral700,
  colors: [],
  size: '24px',
};
