import styled from '@emotion/styled/macro';

export const ModalHeader = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  padding: '24px 64px 16px 32px',
  color: theme.colors.neutral['700'],
  fontSize: '22px',
  fontWeight: 500,
  lineHeight: '32px',
}));
