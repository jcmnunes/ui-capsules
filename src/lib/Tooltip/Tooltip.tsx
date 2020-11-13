import React, { FC } from 'react';
import styled from 'styled-components';
import TooltipTrigger from 'react-popper-tooltip';

export type TooltipPlacementOptions = 'bottom' | 'top' | 'right' | 'left' | 'auto';
export type TooltipTriggerOptions = 'hover' | 'click' | 'right-click' | 'none';

const TooltipContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral['800']};
  color: #fff;
  border-radius: 3px;
  border: ${({ theme }) => `1px solid ${theme.colors.neutral['800']}`};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  padding: 0 6px;
  transition: opacity 0.3s;
  z-index: 2147483647;
  font-size: 14px;
  font-weight: 500;
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

  &[data-placement*='bottom'] {
    height: 1rem;
    left: 0;
    margin-top: -0.4rem;
    top: 0;
    width: 1rem;
  }

  &[data-placement*='bottom']::before {
    border-color: ${({ theme }) =>
      `transparent transparent ${theme.colors.neutral['800']} transparent`};
    border-width: 0 0.5rem 0.4rem 0.5rem;
    position: absolute;
    top: -1px;
  }

  &[data-placement*='top'] {
    bottom: 0;
    height: 1rem;
    left: 0;
    margin-bottom: -1rem;
    width: 1rem;
  }

  &[data-placement*='top']::before {
    border-color: ${({ theme }) =>
      `${theme.colors.neutral['800']} transparent transparent transparent`};
    border-width: 0.4rem 0.5rem 0 0.5rem;
    position: absolute;
    top: 1px;
  }

  &[data-placement*='right'] {
    height: 1rem;
    left: 0;
    margin-left: -0.7rem;
    width: 1rem;
  }

  &[data-placement*='right']::before {
    border-color: ${({ theme }) =>
      `transparent ${theme.colors.neutral['800']} transparent transparent`};
    border-width: 0.5rem 0.4rem 0.5rem 0;
    position: absolute;
    left: 2px;
  }

  &[data-placement*='left'] {
    height: 1rem;
    margin-right: -0.7rem;
    right: 0;
    width: 1rem;
  }

  &[data-placement*='left']::before {
    border-color: ${({ theme }) =>
      `transparent transparent transparent ${theme.colors.neutral['800']}`};
    border-width: 0.5rem 0 0.5rem 0.4em;
    position: absolute;
    left: 4px;
    top: 0;
  }
`;

const Trigger = styled.span`
  display: inline-block;
`;

interface Props {
  tooltip: string;
  placement?: TooltipPlacementOptions;
  trigger?: TooltipTriggerOptions;
  delayShow?: number;
  hasArrow?: boolean;
  followCursor?: boolean;
}

export const Tooltip: FC<Props> = ({
  children,
  tooltip,
  hasArrow,
  trigger = 'hover',
  ...props
}) => (
  <TooltipTrigger
    {...props}
    trigger={['focus', trigger]}
    tooltip={({ arrowRef, tooltipRef, getArrowProps, getTooltipProps, placement }) => (
      <TooltipContainer
        {...getTooltipProps({
          ref: tooltipRef,
        })}
      >
        {hasArrow && (
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
    modifiers={[
      {
        name: 'offset',
        options: {
          offset: [0, 6],
        },
      },
    ]}
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
Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
  hasArrow: false,
  followCursor: false,
  placement: 'bottom',
  trigger: 'hover',
  delayShow: 300,
};
