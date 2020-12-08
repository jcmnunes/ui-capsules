import styled from '@emotion/styled';

interface Props {
  textAlign?: 'left' | 'center' | 'right';
  noWrap?: boolean;
}

export const HeaderCell = styled.th<Props>`
  height: 38px;
  vertical-align: middle;
  padding: 0 18px;
  text-align: ${({ textAlign }) => textAlign || 'left'};
  white-space: ${({ noWrap }) => (noWrap ? 'nowrap' : 'initial')};
`;
