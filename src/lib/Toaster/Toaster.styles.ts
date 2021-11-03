import { ToastContainer as RTToastContainer } from 'react-toastify';
import { keyframes, styled } from '../stitches.config';
import { darkTheme } from '../darkTheme';

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

export const ToastWrapper = styled('div', {
  zIndex: 2,
  background: '$neutral700',
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  color: '$neutral50',
  position: 'relative',

  [`.${darkTheme} &`]: {
    background: '$neutral100',
  },
});

export const StyledContainer = styled(RTToastContainer, {
  zIndex: '$toast',

  '.Toastify__toast-container': {
    color: '$white',
  },

  '.Toastify__toast-body': {
    margin: 'auto 0',
    padding: '6px 6px 10px',
    width: '100%',
    top: 2,
    left: 0,
  },

  [`.Toastify__toast--default,
  .Toastify__toast--error,
  .Toastify__toast--warning,
  .Toastify__toast--success`]: {
    background: '$neutral700',
    border: `1px solid $neutral800`,
    color: '$white',

    [`.${darkTheme} &`]: {
      background: '$neutral100',
      border: `1px solid $neutral400`,
    },
  },

  [`.Toastify__close-button,
  .Toastify__close-button--default`]: {
    color: '$neutral300',
    lineHeight: '16px',
    height: '16px',

    [`.${darkTheme} &`]: {
      color: '$neutral700',
    },
  },

  [`.Toastify__progress-bar,
  .Toastify__progress-bar--default`]: {
    background: '$bg',
    height: '4px',

    [`.${darkTheme} &`]: {
      background: '$neutral400',
    },
  },

  '.slide-top': {
    animation: `${slideTop} 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
  },

  '.slide-bottom': {
    animation: `${slideBottom} 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
  },
});
