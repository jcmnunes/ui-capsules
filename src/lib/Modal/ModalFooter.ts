import styled from '@emotion/styled/macro';

export const ModalFooter = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  background: theme.colors.neutral['50'],
  padding: '16px 24px',

  '& > *': {
    marginLeft: 16,
  },
}));
