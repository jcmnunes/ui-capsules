import { styled } from 'styled-components';

interface CellProps {
  textAlign?: 'left' | 'center' | 'right';
  noWrap?: boolean;
}

export const Cell = styled.td<CellProps>(
  ({ noWrap }) => ({
    padding: '8px 16px',
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
