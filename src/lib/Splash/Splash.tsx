import React, { FC, useEffect } from 'react';
import styled from '@emotion/styled';
import { Spinner } from '../Spinner/Spinner';
import { variant } from 'styled-system';
import { ColorProps } from '../styledProps';

export type SplashVariant = 'splash' | 'spinner';

const Container = styled.div<{ variant: SplashVariant }>(
  ({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(60, 63, 75, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: theme.zIndices.splash,
  }),

  variant<ColorProps, SplashVariant>({
    variants: {
      spinner: {
        bg: 'rgba(60, 63, 75, 0.5)',
      },
      splash: {
        bg: 'neutral.50',
      },
    },
  }),
);

const LargeText = styled.div<{ variant: SplashVariant }>(
  ({ theme }) => ({
    color: theme.colors.neutral['50'],
    fontSize: theme.fontSizes.h3,
    fontWeight: 700,
    opacity: 1,
  }),

  variant<ColorProps, SplashVariant>({
    variants: {
      spinner: {
        color: 'neutral.50',
      },
      splash: {
        color: 'neutral.400',
      },
    },
  }),
);

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
        <Spinner size="large" variantColor="neutral" my="16" />
      )}
    </Container>
  );
};

Splash.displayName = 'Splash';
Splash.defaultProps = {
  showSpinner: true,
};
