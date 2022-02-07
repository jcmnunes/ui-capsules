import React, { FC, useEffect } from 'react';
import { Spinner } from '../Spinner/Spinner';
import { styled } from '../stitches.config';
import { darkTheme } from '../darkTheme';

export type SplashVariant = 'splash' | 'spinner';

const Container = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '$splash',

  variants: {
    variant: {
      spinner: {
        bg: 'rgba(60, 63, 75, 0.5)',
      },
      splash: {
        bg: '$neutral50',
      },
    },
  },
});

const LargeText = styled('div', {
  color: '$neutral50',
  fontSize: '$4xl',
  fontWeight: 700,
  opacity: 1,

  variants: {
    variant: {
      spinner: {
        color: '$neutral100',

        [`.${darkTheme} &`]: {
          color: '$neutral600',
        },
      },
      splash: {
        color: '$neutral600',
      },
    },
  },
});

interface Props {
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

  return (
    <Container variant={variant}>
      {typeof children === 'string' ? (
        <LargeText variant={variant}>{children}</LargeText>
      ) : (
        children
      )}

      {(showSpinner || variant === 'spinner') && (
        <Spinner
          size="large"
          variant={variant === 'spinner' ? 'light' : 'dark'}
          css={{ my: '$4' }}
        />
      )}
    </Container>
  );
};

Splash.displayName = 'Splash';
Splash.defaultProps = {
  showSpinner: true,
};
