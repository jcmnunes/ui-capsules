import { ToastContainer as RTToastContainer } from 'react-toastify';
import { css, keyframes, styled } from 'styled-components';

const slideTop = keyframes({
  '0%': {
    transform: 'translateY(10px)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
});

const slideBottom = keyframes({
  '0%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
  '100%': {
    transform: 'translateY(10px)',
    opacity: 0,
  },
});

export const ToastWrapper = styled.div(({ theme }) => ({
  zIndex: 2,
  background: theme.colors.neutral700,
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  color: theme.colors.neutral50,
  position: 'relative',

  '.darkTheme &': {
    background: theme.colors.neutral100,
  },
}));

export const StyledContainer = styled(RTToastContainer)(
  ({ theme }) => ({
    zIndex: theme.zIndices.toast,

    '.Toastify__toast-container': {
      color: 'white',
    },

    '.Toastify__toast-body': {
      margin: 'auto 0',
      padding: 6,
      width: '100%',
      top: 2,
      left: 0,
    },

    [`.Toastify__toast--default,
  .Toastify__toast--error,
  .Toastify__toast--warning,
  .Toastify__toast--success`]: {
      background: theme.colors.neutral700,
      border: `1px solid ${theme.colors.neutral800}`,
      color: 'white',

      '.darkTheme &': {
        background: theme.colors.neutral100,
        border: `1px solid ${theme.colors.neutral400}`,
      },
    },

    [`.Toastify__close-button,
  .Toastify__close-button--default`]: {
      color: theme.colors.neutral300,
      lineHeight: '16px',
      height: '16px',

      '.darkTheme &': {
        color: theme.colors.neutral700,
      },
    },

    [`.Toastify__progress-bar,
  .Toastify__progress-bar--default`]: {
      background: theme.colors.bg,
      height: '4px',

      '.darkTheme &': {
        background: theme.colors.neutral400,
      },
    },
  }),

  css`
    .slide-top {
      animation: ${slideTop} 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }

    .slide-bottom {
      animation: ${slideBottom} 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }
  `,
);
