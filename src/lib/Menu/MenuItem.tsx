import React from 'react';
import styled from '@emotion/styled/macro';
import { Flex } from '../Flex/Flex';
import { Text } from '../Text/Text';
import { Box, BoxProps } from '../Box/Box';

interface StyledMenuItemProps extends BoxProps {
  highlighted: boolean;
}

export const StyledMenuItem = styled(Flex)<StyledMenuItemProps>(({ highlighted, theme }) => ({
  background: highlighted ? theme.colors.neutral['100'] : 'bg',
  width: '100%',
  padding: '6px 16px',
  textAlign: 'left',
  minWidth: 240,
}));

export const MenuItemWrapper = styled.button<{ closeOnAction?: boolean }>({
  width: '100%',
});

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
  onClick(): void;
  helperText?: string;
  leftAddon?: React.ReactElement;
  rightAddon?: React.ReactElement;
  highlighted?: boolean;
  closeOnAction?: boolean;
}

export const MenuItem: React.FC<Props> = ({
  text,
  helperText,
  leftAddon,
  rightAddon,
  highlighted = false,
  closeOnAction = true,
  ...rest
}) => {
  return (
    <MenuItemWrapper closeOnAction={closeOnAction} {...rest}>
      <StyledMenuItem highlighted={highlighted} alignItems="flex-start">
        {!!leftAddon && <Box pt={2}>{leftAddon}</Box>}

        <Flex flexDirection="column" flex={1} ml={!!leftAddon ? 8 : 0}>
          <Text fontSize="body" fontWeight={500} color="neutral.700">
            {text}
          </Text>

          {!!helperText && (
            <Text fontSize="small" color="neutral.500">
              {helperText}
            </Text>
          )}
        </Flex>

        {!!rightAddon && <Box pt={2}>{rightAddon}</Box>}
      </StyledMenuItem>
    </MenuItemWrapper>
  );
};

MenuItem.displayName = 'MenuItem';
MenuItem.defaultProps = {
  closeOnAction: false,
  highlighted: false,
};
