import { styled } from 'styled-components';

interface SidebarWrapperProps {
  $isOpen: boolean;
}

export const SidebarWrapper = styled.div<SidebarWrapperProps>(({ theme, $isOpen }) => ({
  position: 'fixed',
  flex: 2,
  background: theme.colors.neutral100,
  display: $isOpen ? 'flex' : 'none',
  justifyContent: 'flex-end',
  zIndex: 1,
  boxShadow: theme.shadows[500],
  height: '100%',

  [theme.media.md]: {
    display: 'flex',
    position: 'relative',
    boxShadow: 'revert',
    borderRight: `1px solid ${theme.colors.neutral200}`,
  },
}));

export const ShowcaseWrapper = styled.div(({ theme }) => ({
  flex: 3,
  padding: '32px 32px 64px',
  background: theme.colors.bg,
  height: '100%',
  overflowY: 'auto',
  isolation: 'isolate',

  [theme.media.sm]: {
    padding: '32px 48px 64px',
  },

  [theme.media.lg]: {
    padding: '32px 64px 64px',
  },
}));

export const ShowcaseContent = styled.div(({ theme }) => ({
  [theme.media.md]: {
    maxWidth: 600,
  },
}));

export const SidebarOverlay = styled.div(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: 'rgba(60, 63, 75, 0.65)',
  backdropFilter: 'blur(4px)',
  zIndex: 1,

  [theme.media.md]: {
    display: 'none',
  },
}));
