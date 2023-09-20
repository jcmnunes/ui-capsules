import { styled } from 'styled-components';

interface HeaderCellProps {
  textAlign?: 'left' | 'center' | 'right';
  noWrap?: boolean;
}

export const HeaderCell = styled.th<HeaderCellProps>(
  ({ noWrap }) => ({
    height: '38px',
    verticalAlign: 'middle',
    padding: '0 18px',
    fontWeight: 600,
    whiteSpace: noWrap ? 'nowrap' : 'normal',
  }),

  ({ textAlign }) => {
    switch (textAlign) {
      case 'center':
        return {
          textAlign: 'center',
        };
      case 'right':
        return {
          textAlign: 'right',
        };
      default:
        return {
          textAlign: 'left',
        };
    }
  },
);
