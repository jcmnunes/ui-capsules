import React, { FC } from 'react';
import { StyledTooltip } from './Tooltip.styles';
import { TooltipProps } from '@reach/tooltip';

const centered = (triggerRect: any, tooltipRect: any) => {
  const triggerCenter = triggerRect.left + triggerRect.width / 2;
  const left = triggerCenter - tooltipRect.width / 2;
  const maxLeft = window.innerWidth - tooltipRect.width - 2;
  return {
    left: Math.min(Math.max(2, left), maxLeft) + window.scrollX,
    top: triggerRect.bottom + 8 + window.scrollY,
  };
};

export const Tooltip: FC<TooltipProps> = ({ children, ...rest }) => {
  return (
    <StyledTooltip position={centered} {...rest}>
      {children}
    </StyledTooltip>
  );
};

Tooltip.displayName = 'Tooltip';
