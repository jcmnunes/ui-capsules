import { styled } from 'styled-components';

export const ModalFooter = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  background: theme.colors.bg,
  padding: '16px 24px',

  '& > *': {
    marginLeft: 8,
  },
}));
