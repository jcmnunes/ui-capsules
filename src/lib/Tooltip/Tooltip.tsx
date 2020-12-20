import React, { FC } from 'react';
import Tippy, { TippyProps } from '@tippyjs/react/headless';
import { Text } from '../Text/Text';
import { Wrapper } from './Tooltip.styles';

export interface TooltipProps extends TippyProps {}

export const Tooltip: FC<TooltipProps> = ({
  children,
  placement = 'auto',
  delay = [300, 0],
  content,
  ...rest
}) => {
  return (
    <Tippy
      placement={placement}
      delay={delay}
      render={attrs => (
        <Wrapper tabIndex={-1} {...attrs}>
          {typeof content === 'string' ? (
            <Text color="neutral.50" fontSize="small" fontWeight={500}>
              {content}
            </Text>
          ) : (
            content
          )}
        </Wrapper>
      )}
      {...rest}
    >
      {children}
    </Tippy>
  );
};

Tooltip.displayName = 'Tooltip';
Tooltip.defaultProps = {
  placement: 'auto',
  delay: [300, 0],
};
