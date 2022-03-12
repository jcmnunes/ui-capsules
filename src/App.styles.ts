import { styled } from './lib';

export const SidebarWrapper = styled('div', {
  position: 'fixed',
  flex: 2,
  background: '$neutral100',
  display: 'none',
  justifyContent: 'flex-end',
  zIndex: 1,
  boxShadow: '$500',
  height: '100%',

  '@md': {
    display: 'flex',
    position: 'relative',
    boxShadow: 'revert',
    borderRight: `1px solid $neutral200`,
  },

  variants: {
    isOpen: {
      true: {
        display: 'flex',
      },
    },
  },
});

export const ShowcaseWrapper = styled('div', {
  flex: 3,
  padding: '32px 32px 64px',
  background: '$bg',
  height: '100%',
  overflowY: 'auto',
  isolation: 'isolate',

  '@sm': {
    padding: '32px 48px 64px',
  },

  '@lg': {
    padding: '32px 64px 64px',
  },
});

export const ShowcaseContent = styled('div', {
  '@md': {
    maxWidth: 600,
  },
});

export const SidebarOverlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: 'rgba(60, 63, 75, 0.65)',
  backdropFilter: 'blur(4px)',
  zIndex: 1,

  '@md': {
    display: 'none',
  },
});
