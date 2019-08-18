import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TooltipTrigger from 'react-popper-tooltip';
import theme from '../theme';

const TooltipContainer = styled.div`
  background-color: ${theme.neutral800};
  color: #fff;
  border-radius: 3px;
  border: 1px solid ${theme.neutral800};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  margin: 0.4rem;
  padding: 0.4rem;
  transition: opacity 0.3s;
  z-index: 2147483647;
`;

const TooltipArrow = styled.div`
  height: 1rem;
  position: absolute;
  width: 1rem;

  &::before {
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    margin: auto;
    width: 0;
  }

  &::after {
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    margin: auto;
    position: absolute;
    width: 0;
  }

  &[data-placement*='bottom'] {
    height: 1rem;
    left: 0;
    margin-top: -0.4rem;
    top: 0;
    width: 1rem;
  }

  &[data-placement*='bottom']::before {
    border-color: transparent transparent silver transparent;
    border-width: 0 0.5rem 0.4rem 0.5rem;
    position: absolute;
    top: -1px;
  }

  &[data-placement*='bottom']::after {
    border-color: transparent transparent white transparent;
    border-width: 0 0.5rem 0.4rem 0.5rem;
  }

  &[data-placement*='top'] {
    bottom: 0;
    height: 1rem;
    left: 0;
    margin-bottom: -1rem;
    width: 1rem;
  }

  &[data-placement*='top']::before {
    border-color: silver transparent transparent transparent;
    border-width: 0.4rem 0.5rem 0 0.5rem;
    position: absolute;
    top: 1px;
  }

  &[data-placement*='top']::after {
    border-color: white transparent transparent transparent;
    border-width: 0.4rem 0.5rem 0 0.5rem;
  }

  &[data-placement*='right'] {
    height: 1rem;
    left: 0;
    margin-left: -0.7rem;
    width: 1rem;
  }

  &[data-placement*='right']::before {
    border-color: transparent silver transparent transparent;
    border-width: 0.5rem 0.4rem 0.5rem 0;
  }

  &[data-placement*='right']::after {
    border-color: transparent white transparent transparent;
    border-width: 0.5rem 0.4rem 0.5rem 0;
    left: 6px;
    top: 0;
  }

  &[data-placement*='left'] {
    height: 1rem;
    margin-right: -0.7rem;
    right: 0;
    width: 1rem;
  }

  &[data-placement*='left']::before {
    border-color: transparent transparent transparent silver;
    border-width: 0.5rem 0 0.5rem 0.4em;
  }

  &[data-placement*='left']::after {
    border-color: transparent transparent transparent white;
    border-width: 0.5rem 0 0.5rem 0.4em;
    left: 3px;
    top: 0;
  }
`;

const Trigger = styled.span``;

const Tooltip = ({ children, tooltip, hideArrow, ...props }) => (
  <TooltipTrigger
    {...props}
    tooltip={({ arrowRef, tooltipRef, getArrowProps, getTooltipProps, placement }) => (
      <TooltipContainer
        {...getTooltipProps({
          ref: tooltipRef,
        })}
      >
        {!hideArrow && (
          <TooltipArrow
            {...getArrowProps({
              ref: arrowRef,
              'data-placement': placement,
            })}
          />
        )}
        {tooltip}
      </TooltipContainer>
    )}
  >
    {({ getTriggerProps, triggerRef }) => (
      <Trigger
        {...getTriggerProps({
          ref: triggerRef,
        })}
      >
        {children}
      </Trigger>
    )}
  </TooltipTrigger>
);

Tooltip.defaultProps = {
  hideArrow: true,
  followCursor: false,
  placement: 'bottom',
  trigger: 'hover',
  delayShow: 300,
};

Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  tooltip: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['auto', 'top', 'bottom', 'right', 'left']),
  trigger: PropTypes.oneOf(['click', 'hover', 'right-click', 'none']),
  delayShow: PropTypes.number,
  hideArrow: PropTypes.bool,
  followCursor: PropTypes.bool,
};

export default Tooltip;
