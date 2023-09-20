import React, { ComponentPropsWithoutRef, useMemo } from 'react';
import { outlineIcons, solidIcons } from './Icon.constants';
import { IconType, IconVariant } from '../types';
import { styled } from 'styled-components';

const Wrapper = styled.span<{ $iconSize: number }>(({ $iconSize }) => ({
  height: $iconSize,
  display: 'inline-flex',
}));

export interface IconProps extends ComponentPropsWithoutRef<'span'> {
  icon: IconType;
  variant?: IconVariant;
  size?: number;
}

export const Icon = ({ icon, size, variant = 'solid', ...rest }: IconProps) => {
  const iconSize = useMemo(() => {
    if (size) {
      return size;
    }

    return variant === 'solid' ? 20 : 24;
  }, [size, variant]);

  return (
    <Wrapper $iconSize={iconSize} {...rest}>
      <svg
        width={`${iconSize}px`}
        height={`${iconSize}px`}
        viewBox={variant === 'solid' ? '0 0 20 20' : '0 0 24 24'}
        fill={variant === 'solid' ? 'currentColor' : 'none'}
        xmlns="http://www.w3.org/2000/svg"
      >
        {variant === 'solid' ? (
          <path d={solidIcons[icon]} fillRule="evenodd" clipRule="evenodd" />
        ) : (
          <path
            d={outlineIcons[icon]}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        )}
      </svg>
    </Wrapper>
  );
};

Icon.displayName = 'Icon';
