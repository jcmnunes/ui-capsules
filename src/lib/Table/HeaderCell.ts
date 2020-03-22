import styled from 'styled-components';

interface Props {
  textAlign?: 'left' | 'center' | 'right';
  noWrap?: boolean;
}

export const HeaderCell = styled.th<Props>`
  height: 38px;
  vertical-align: middle;
  padding: 0 18px;
  text-align: ${({ textAlign }) => textAlign};
  white-space: ${({ noWrap }) => noWrap && 'nowrap'};
`;
