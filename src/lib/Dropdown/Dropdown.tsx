import React, { FC, ReactElement } from 'react';
import Downshift, { DownshiftState, StateChangeOptions } from 'downshift';
import { Manager, Reference, Popper } from 'react-popper';
import styled from 'styled-components';
import { theme } from '../theme';
import { IconButton } from '../IconButton/IconButton';
import { illustratedIcons } from '../IllustratedIcon/IllustratedIcon.constants';

const Wrapper = styled.div`
  display: block;
  position: relative;
`;

interface MenuProps {
  placement?: 'left' | 'right';
}
const Menu = styled.div<MenuProps>`
  width: auto;
  min-width: 200px;
  border: 1px solid mistyrose;
  border: 1px solid ${theme.neutral100};
  border-radius: 4px;
  margin: 6px 0;
  padding: 0;
  box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12);
  background: white;
  z-index: 100;
  right: ${({ placement }) => (placement === 'right' ? 0 : 'auto')};
  left: ${({ placement }) => (placement === 'left' ? 0 : 'auto')};
`;

export const MenuWrapper = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledIconButton = styled(({ handleAction, ...other }) => <IconButton {...other} />)`
  height: 40px;
`;

interface DropdownItemProps {
  icon: keyof typeof illustratedIcons;
  handleAction(): void;
  text?: string;
  iconBefore?: string;
  iconAfter?: string;
  closeOnAction?: boolean;
  highlighted?: boolean;
  isLoading?: boolean;
}

export const DropdownItem: FC<DropdownItemProps> = ({
  icon,
  closeOnAction = true,
  highlighted = false,
  text = '',
  handleAction,
  ...other
}) => (
  <StyledIconButton
    isBlock
    icon={icon}
    text={text}
    handleAction={handleAction}
    closeOnAction={closeOnAction}
    tabIndex={-1}
    style={{ background: highlighted ? theme.neutral075 : 'inherit' }}
    {...other}
  />
);
DropdownItem.displayName = 'DropdownItem';

DropdownItem.defaultProps = {
  text: '',
  iconBefore: undefined,
  iconAfter: undefined,
  closeOnAction: true,
  highlighted: false,
};

interface Item {
  name: string;
  closeOnAction: boolean;
  handleAction(): void;
}
const stateReducer = (state: DownshiftState<Item>, changes: StateChangeOptions<Item>) => {
  switch (changes.type) {
    case Downshift.stateChangeTypes.keyDownEnter:
    case Downshift.stateChangeTypes.clickItem:
      if (changes.selectedItem) {
        changes.selectedItem.handleAction();
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
  children: ReactElement<DropdownItemProps>[];
}

export const Dropdown: FC<Props> = ({ trigger: Trigger, placement, children }) => {
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
                      style={{ zIndex: theme.selectZIndex, ...style }}
                      data-placement={popperPlacement}
                    >
                      <Menu {...getMenuProps()} placement={placement}>
                        <MenuWrapper>
                          {React.Children.map(children, (child, index) => {
                            if (child) {
                              return React.cloneElement(child, {
                                highlighted: highlightedIndex === index,
                                ...getItemProps({
                                  key: index,
                                  index,
                                  item: {
                                    name: index.toString(),
                                    closeOnAction: child.props.closeOnAction || false,
                                    handleAction: child.props.handleAction,
                                  },
                                }),
                              });
                            }
                            return null;
                          })}
                        </MenuWrapper>
                      </Menu>
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
Dropdown.displayName = 'Dropdown';

Dropdown.defaultProps = {
  placement: 'left',
};
