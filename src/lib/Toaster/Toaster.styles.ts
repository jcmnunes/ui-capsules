import styled from '@emotion/styled';
import { ToastContainer as RTToastContainer } from 'react-toastify';

export const ToastWrapper = styled.div`
  z-index: 2;
  background: ${({ theme }) => theme.colors.neutral['700']};
  display: flex;
  flex-direction: row;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.neutral['50']};
  position: relative;
`;

export const StyledContainer = styled(RTToastContainer)`
  .Toastify__toast-container {
    color: ${({ theme }) => theme.colors.neutral['50']};
  }
  .Toastify__toast-body {
    margin: auto 0;
    padding: 6px;
    width: 100%;
  }
  .Toastify__toast--default,
  .Toastify__toast--error,
  .Toastify__toast--warning,
  .Toastify__toast--success {
    background: ${({ theme }) => theme.colors.neutral['700']};
    color: ${({ theme }) => theme.colors.neutral['50']};
  }
  .Toastify__toast-body {
    top: 2px;
    left: 0;
  }
  .Toastify__close-button,
  .Toastify__close-button--default {
    color: ${({ theme }) => theme.colors.neutral['300']};
  }
`;
