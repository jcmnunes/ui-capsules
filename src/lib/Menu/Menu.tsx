import React, { FC, ReactElement, MouseEvent } from 'react';
import styled from '@emotion/styled';
import Downshift, { DownshiftState, StateChangeOptions } from 'downshift';
import { Manager, Popper, Reference } from 'react-popper';
import { Props as MenuItemProps } from './MenuItem';
import { theme } from '../theme';

const Wrapper = styled.div`
  display: block;
  position: relative;
`;

interface MenuProps {
  placement?: 'left' | 'right';
}

const StyledMenu = styled.div<MenuProps>`
  width: auto;
  min-width: 200px;
  border: 1px solid mistyrose;
  border: 1px solid ${theme.colors.neutral['100']};
  border-radius: 4px;
  margin: 6px 0;
  padding: 4px 0;
  box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12);
  background: white;
  z-index: 100;
  right: ${({ placement }) => (placement === 'right' ? 0 : 'auto')};
  left: ${({ placement }) => (placement === 'left' ? 0 : 'auto')};
`;

interface Item {
  name: string;
  closeOnAction: boolean;
  onClick(e?: MouseEvent<HTMLButtonElement>): void;
}

const stateReducer = (state: DownshiftState<Item>, changes: StateChangeOptions<Item>) => {
  switch (changes.type) {
    case Downshift.stateChangeTypes.keyDownEnter:
    case Downshift.stateChangeTypes.clickItem:
      if (changes.selectedItem) {
        changes.selectedItem.onClick();
      }
      return {
        ...changes,
        isOpen: changes.selectedItem ? !changes.selectedItem.closeOnAction : false,
        highlightedIndex: state.highlightedIndex,
      };
    default:
      return changes;
  }
};

interface Props {
  trigger: JSX.Element;
  placement?: 'left' | 'right';
  children: (ReactElement<MenuItemProps> | null)[];
}

export const Menu: FC<Props> = ({ trigger: Trigger, placement, children }) => {
  return (
    <Wrapper>
      <Downshift
        itemToString={item => (item === null ? '' : item.name)}
        stateReducer={stateReducer}
      >
        {({ getMenuProps, getToggleButtonProps, getItemProps, highlightedIndex, isOpen }) => (
          <div>
            <Manager>
              <Reference>
                {({ ref }) => (
                  <div ref={ref} {...getToggleButtonProps()}>
                    {Trigger}
                  </div>
                )}
              </Reference>
              {isOpen ? (
                <Popper
                  placement={
                    `bottom-${placement === 'left' ? 'start' : 'end'}` as
                      | 'bottom-start'
                      | 'bottom-end'
                  }
                >
                  {({ ref, style, placement: popperPlacement }) => (
                    <div
                      ref={ref}
                      style={{ zIndex: theme.zIndices.select, ...style }}
                      data-placement={popperPlacement}
                    >
                      <StyledMenu {...getMenuProps()} placement={placement}>
                        {React.Children.map(children, (child, index) => {
                          if (child) {
                            return React.cloneElement(child, {
                              highlighted: highlightedIndex === index,
                              ...getItemProps({
                                key: index,
                                index,
                                item: {
                                  name: index.toString(),
                                  closeOnAction: child.props.closeOnAction !== false,
                                  onClick: child.props.onClick,
                                },
                              }),
                            });
                          }
                          return null;
                        })}
                      </StyledMenu>
                    </div>
                  )}
                </Popper>
              ) : null}
            </Manager>
          </div>
        )}
      </Downshift>
    </Wrapper>
  );
};

Menu.displayName = 'Menu';
Menu.defaultProps = {
  placement: 'left',
};
