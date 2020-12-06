import styled from '@emotion/styled/macro';

interface Props {
  textAlign?: 'left' | 'center' | 'right';
  noWrap?: boolean;
}

export const Cell = styled.td<Props>`
  padding: 8px 16px;
  text-align: ${({ textAlign }) => textAlign};
  white-space: ${({ noWrap }) => noWrap && 'nowrap'};
`;
