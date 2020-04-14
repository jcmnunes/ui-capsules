import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';

const loading = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

interface Props {
  width: string;
  height: string;
  circular?: boolean;
  background?: string;
}
const StyledLoadingElement = styled.div.attrs<Props>(({ background = theme.neutral100 }) => ({
  style: { background },
}))<Props>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ circular }) => (circular ? '999px' : 'initial')};
  overflow: hidden;

  &:after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: ${loading} 1s infinite;
  }
`;

export const LoadingMask: FC<Props> = props => <StyledLoadingElement {...props} />;
LoadingMask.displayName = 'LoadingMask';

LoadingMask.defaultProps = {
  circular: false,
  background: theme.neutral100,
};
