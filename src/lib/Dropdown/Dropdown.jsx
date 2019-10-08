import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import styled from 'styled-components';
import theme from '../theme';
import IconButton from '../IconButton/IconButton';
import { ICONS } from '../Icon24/Icon24.constants';

const Wrapper = styled.div`
  display: block;
  position: relative;
`;

const Menu = styled.div`
  position: absolute;
  width: auto;
  min-width: 200px;
  border: 1px solid mistyrose;
  border: 1px solid ${theme.neutral100};
  border-radius: 4px;
  margin: 6px 0 0;
  padding: 0;
  box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12);
  background: white;
  z-index: 100;
  right: ${props => (props.placement === 'right' ? 0 : 'auto')};
  left: ${props => (props.placement === 'left' ? 0 : 'auto')};
`;

export const MenuWrapper = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DropdownItem = ({
  icon,
  text,
  closeOnAction,
  handleAction,
  highlighted,
  ...other
}) => (
  <IconButton
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
  iconBefore: null,
  iconAfter: null,
  closeOnAction: true,
};

DropdownItem.propTypes = {
  icon: PropTypes.oneOf(Object.keys(ICONS)).isRequired,
  text: PropTypes.string,
  iconBefore: PropTypes.string,
  iconAfter: PropTypes.string,
  closeOnAction: PropTypes.bool,
  handleAction: PropTypes.func.isRequired,
  highlighted: PropTypes.bool.isRequired,
};

const stateReducer = (state, changes) => {
  switch (changes.type) {
    case Downshift.stateChangeTypes.keyDownEnter:
    case Downshift.stateChangeTypes.clickItem:
      changes.selectedItem.handleAction();
      return {
        ...changes,
        isOpen: !changes.selectedItem.closeOnAction,
        highlightedIndex: state.highlightedIndex,
      };
    default:
      return changes;
  }
};

const Dropdown = ({ trigger, placement, children }) => {
  return (
    <Wrapper>
      <Downshift
        itemToString={item => (item === null ? '' : item.name)}
        stateReducer={stateReducer}
      >
        {({ getMenuProps, getToggleButtonProps, getItemProps, highlightedIndex, isOpen }) => (
          <div>
            {React.cloneElement(trigger, {
              ...getToggleButtonProps(),
            })}
            {isOpen ? (
              <Menu {...getMenuProps()} placement={placement}>
                <MenuWrapper>
                  {React.Children.toArray(children).map((child, index) =>
                    React.cloneElement(child, {
                      highlighted: highlightedIndex === index,
                      ...getItemProps({
                        key: index,
                        index,
                        item: {
                          name: index,
                          closeOnAction: child.props.closeOnAction,
                          handleAction: child.props.handleAction,
                        },
                      }),
                    }),
                  )}
                </MenuWrapper>
              </Menu>
            ) : null}
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

Dropdown.propTypes = {
  trigger: PropTypes.element.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  placement: PropTypes.oneOf(['left', 'right']),
};

export default Dropdown;
