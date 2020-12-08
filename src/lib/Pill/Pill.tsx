import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { theme } from '../theme';

export const StyledPill = styled.span`
  font-size: 8px;
  border-radius: 999px;
  border: 1px solid ${theme.colors.pink['600']};
  background-color: ${theme.colors.pink['50']};
  color: ${theme.colors.pink['600']};
  padding: 0 4px;
  text-transform: uppercase;
  font-weight: 600;
`;

interface Props {}

export const Pill: FC<Props> = ({ children }) => <StyledPill>{children}</StyledPill>;
Pill.displayName = 'Pill';

Pill.propTypes = {
  children: PropTypes.string.isRequired,
};
