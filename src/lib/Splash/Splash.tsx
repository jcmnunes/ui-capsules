import React, { FC, useEffect } from 'react';
import { styled } from 'styled-components';
import ReactDOM from 'react-dom';
import { Spinner } from '../Spinner/Spinner';

export type SplashVariant = 'splash' | 'spinner';

interface ContainerProps {
  $variant: SplashVariant;
}

const Container = styled.div<ContainerProps>(
  ({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: theme.zIndices.splash,
  }),

  ({ $variant, theme }) => {
    switch ($variant) {
      case 'spinner':
        return {
          background: 'rgba(60, 63, 75, 0.5)',
        };

      case 'splash':
        return {
          background: theme.colors.neutral50,
        };

      default:
        return {};
    }
  },
);

interface LargeTextProps {
  $variant: SplashVariant;
}

const LargeText = styled.div<LargeTextProps>(
  ({ theme }) => ({
    color: theme.colors.neutral50,
    fontSize: theme.fontSizes['4xl'],
    fontWeight: 700,
    opacity: 1,
  }),

  ({ $variant, theme }) => {
    switch ($variant) {
      case 'spinner':
        return {
          color: theme.colors.neutral100,

          '.darkTheme &': {
            color: theme.colors.neutral600,
          },
        };

      case 'splash':
        return {
          color: theme.colors.neutral600,
        };

      default:
        return {};
    }
  },
);

export interface Props {
  variant: SplashVariant;
  showSpinner?: boolean;
}

export const Splash: FC<Props> = ({ children, showSpinner = true, variant }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'initial';
    };
  }, []);

  return ReactDOM.createPortal(
    <Container $variant={variant}>
      {typeof children === 'string' ? (
        <LargeText $variant={variant}>{children}</LargeText>
      ) : (
        children
      )}

      {(showSpinner || variant === 'spinner') && (
        <Spinner
          size="large"
          variant={variant === 'spinner' ? 'light' : 'dark'}
          style={{ marginTop: 16, marginBottom: 16 }}
        />
      )}
    </Container>,
    document.body,
  );
};

Splash.displayName = 'Splash';
Splash.defaultProps = {
  showSpinner: true,
};
