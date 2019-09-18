import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon24 from '../Icon24/Icon24';
import theme from '../theme';
import { ICONS } from '../Icon24/Icon24.constants';
import Spinner from '../Spinner/Spinner';

const StyledIcon24 = styled(Icon24)`
  .ui-capsules-icon-primary {
    fill: ${({ colors }) => colors[0]};
  }

  .ui-capsules-icon-secondary {
    fill: ${({ colors }) => colors[1]};
  }
`;

const StyledButton = styled.button`
  height: ${({ text, hasBackground, isRound }) =>
    isRound ? '36px' : text || hasBackground ? '32px' : '24px'};
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

const Content = styled.div`
  visibility: ${props => (props.isLoading ? 'hidden' : 'visible')};
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

const IconButton = ({
  type,
  text,
  icon,
  colors,
  isLoading,
  isDisabled,
  isBlock,
  hasBackground,
  isRound,
  hasChev,
  textColor,
  ...other
}) => (
  <StyledButton
    type={type}
    text={text}
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
      <SpinnerWrapper size="medium">
        <Spinner size="medium" appearance="secondary" />
      </SpinnerWrapper>
    )}
    <Content
      colors={colors}
      text={text}
      hasBackground={hasBackground}
      isLoading={isLoading}
      isDisabled={isDisabled}
    >
      {<StyledIcon24 icon={icon} colors={colors} />}
      {!!text && <Text>{text}</Text>}
      {hasChev && <Icon24 icon="CHEV_DOWN" />}
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
};

IconButton.propTypes = {
  icon: PropTypes.oneOf(Object.keys(ICONS)).isRequired,
  text: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isBlock: PropTypes.bool,
  isRound: PropTypes.bool,
  hasChev: PropTypes.bool,
  hasBackground: PropTypes.bool,
  colors: PropTypes.arrayOf(PropTypes.string),
  textColor: PropTypes.string,
};

export default IconButton;
