import React from 'react';
import { styled } from '../theme';
import { Box, BoxProps } from '../Box/Box';

export const StyledFlex = styled(Box)({
  display: 'flex',
});

export const Flex: React.FC<BoxProps> = props => <StyledFlex {...props} />;
