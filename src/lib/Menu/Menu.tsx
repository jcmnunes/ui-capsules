import React, { FC, MouseEvent, ReactElement, useState } from 'react';
import styled from '@emotion/styled';
import Downshift, { DownshiftState, StateChangeOptions } from 'downshift';
import { usePopper } from 'react-popper';
import { MenuItemProps } from './MenuItem';
import { theme } from '../theme';

const Wrapper = styled.div`
  display: block;
  position: relative;
`;

const StyledMenu = styled.div`
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
  display: flex;
  flex-direction: column;
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

interface MenuProps {
  trigger: JSX.Element;
  placement?: 'left' | 'right';
  children: (ReactElement<MenuItemProps> | null)[];
}

export const Menu: FC<MenuProps> = ({ trigger: Trigger, placement = 'left', children }) => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: `bottom-${placement === 'left' ? 'start' : 'end'}` as any,
  });

  return (
    <Wrapper>
      <Downshift
        itemToString={item => (item === null ? '' : item.name)}
        stateReducer={stateReducer}
      >
        {({ getMenuProps, getToggleButtonProps, getItemProps, highlightedIndex, isOpen }) => (
          <div>
            <div ref={setReferenceElement} {...getToggleButtonProps()}>
              {Trigger}
            </div>

            {isOpen ? (
              <div
                ref={setPopperElement}
                style={{ zIndex: theme.zIndices.select, ...styles.popper }}
                data-placement={attributes.popperPlacement}
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
            ) : null}
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
