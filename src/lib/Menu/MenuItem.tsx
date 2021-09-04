import React, { MouseEvent } from 'react';
import styled from '@emotion/styled';
import { Flex } from '../Flex/Flex';
import { Box, BoxProps } from '../Box/Box';
import { Text } from '../Text/Text';
import { Spinner } from '../Spinner/Spinner';
import { Icon } from '../Icon/Icon';
import { IconType, IconVariant } from '../types';

interface StyledMenuItemProps extends BoxProps {
  highlighted: boolean;
}

export const StyledMenuItem = styled(Flex)<StyledMenuItemProps>(({ highlighted, theme }) => ({
  background: highlighted ? theme.colors.neutral['200'] : 'bg',
  width: '100%',
  padding: '8px 16px',
  textAlign: 'left',
  minWidth: 240,
}));

export const MenuItemWrapper = styled.button<{ closeOnAction?: boolean; isLoading?: boolean }>(
  ({ isLoading }) => ({
    width: '100%',
    cursor: isLoading ? 'not-allowed' : 'pointer',
  }),
);

export interface MenuItemProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
  onClick(e: MouseEvent<HTMLButtonElement>): void;
  helperText?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftAddon?: React.ReactElement;
  rightAddon?: React.ReactElement;
  iconVariant?: IconVariant;
  highlighted?: boolean;
  closeOnAction?: boolean;
  isLoading?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  text,
  helperText,
  leftIcon,
  rightIcon,
  leftAddon,
  rightAddon,
  iconVariant = 'outline',
  highlighted = false,
  closeOnAction = true,
  isLoading,
  ...rest
}) => {
  return (
    <MenuItemWrapper closeOnAction={closeOnAction} isLoading={isLoading} {...rest}>
      {isLoading ? (
        <Flex alignItems="center" justifyContent="center" bg="neutral.50" px="16" py="8">
          <Spinner variantColor="neutral" />
        </Flex>
      ) : (
        <StyledMenuItem highlighted={highlighted} alignItems="flex-start">
          {!!leftIcon ? (
            <Icon icon={leftIcon} size={18} pt={2} variant={iconVariant} />
          ) : (
            !!leftAddon && <Box pt={2}>{leftAddon}</Box>
          )}

          <Flex flexDirection="column" flex={1} ml={!!leftIcon || !!leftAddon ? 8 : 0}>
            <Text fontSize="body" fontWeight={500} color="neutral.700">
              {text}
            </Text>

            {!!helperText && (
              <Text fontSize="small" color="neutral.500">
                {helperText}
              </Text>
            )}
          </Flex>

          {!!rightIcon ? (
            <Icon icon={rightIcon} size={18} pt={2} variant={iconVariant} />
          ) : (
            !!rightAddon && <Box pt={2}>{rightAddon}</Box>
          )}
        </StyledMenuItem>
      )}
    </MenuItemWrapper>
  );
};

MenuItem.displayName = 'MenuItem';
MenuItem.defaultProps = {
  iconVariant: 'outline',
};
