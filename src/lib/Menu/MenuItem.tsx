import React from 'react';
import { Flex } from '../Flex/Flex';
import { Text } from '../Text/Text';
import { icons } from '../Icon/Icon.constants';
import { styled } from '../theme';
import { Box } from '../Box/Box';

interface StyledMenuItemProps {
  highlighted: boolean;
}

export const StyledMenuItem = styled(Flex).attrs({ alignItems: 'flex-start' })<StyledMenuItemProps>(
  ({ highlighted, theme }) => ({
    background: highlighted ? theme.colors.neutral['100'] : 'bg',
    width: '100%',
    padding: '6px 16px',
    textAlign: 'left',
    minWidth: 240,
  }),
);

export const MenuItemWrapper = styled.button<{ closeOnAction?: boolean }>({
  width: '100%',
});

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  icon?: keyof typeof icons;
  text: string;
  onClick(): void;
  helperText?: string;
  leftAddon?: React.ReactElement;
  rightAddon?: React.ReactElement;
  highlighted?: boolean;
  closeOnAction?: boolean;
}

export const MenuItem: React.FC<Props> = ({
  icon,
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
      <StyledMenuItem highlighted={highlighted}>
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
