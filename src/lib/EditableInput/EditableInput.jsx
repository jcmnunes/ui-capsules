import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../Input/Input';
import Button from '../Button/Button';
import theme from '../theme';

const dimensions = {
  small: {
    height: '24px',
    fontSize: '14px',
    padding: '2px 5px',
  },
  medium: {
    height: '32px',
    fontSize: '16px',
    padding: '4px 9px',
  },
  large: {
    height: '48px',
    fontSize: '18px',
    padding: '13px 13px',
  },
};

const StyledEditableInput = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Value = styled.button`
  display: flex;
  border-radius: 4px;
  user-select: text;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: ${props => dimensions[props.size].padding};
  font-size: ${props => dimensions[props.size].fontSize};
  height: ${props => dimensions[props.size].height};
  cursor: text;
  width: 100%;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ canEdit }) => (canEdit ? theme.neutral075 : 'initial')};
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.blue100}};
  }
`;

const StyledInput = styled(Input)`
  width: 100%;
  flex: 1;
`;

const StyledButton = styled(Button)`
  margin-left: 5px;

  &:last-child {
    margin-left: 3px;
  }
`;

class EditableInput extends Component {
  state = {
    internalValue: this.props.value,
    editing: false,
    prevValue: '',
  };

  startEditing = () => {
    const { value, isDisabled } = this.props;
    if (isDisabled) return;
    this.setState(prevState => ({
      editing: true,
      prevValue: prevState.value,
      internalValue: value,
    }));
  };

  handleOnChange = ev => {
    const { value } = ev.target;
    this.setState({ internalValue: value });
  };

  handleCancel = () => {
    this.setState(prevState => ({ editing: false, internalValue: prevState.prevValue }));
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { value, action } = this.props;
    const { internalValue } = this.state;
    if (!internalValue) {
      this.handleCancel();
    }
    internalValue !== value && action(internalValue);
    this.setState({ editing: false });
  };

  handleKeyDown = ev => {
    const { editing } = this.state;
    if (editing) {
      if (ev.key === 'Escape') {
        this.handleCancel();
      }
    }
  };

  render() {
    const { value, size, isDisabled } = this.props;
    const { editing, internalValue } = this.state;
    return (
      <StyledEditableInput
        onSubmit={this.handleSubmit}
        onKeyDown={this.handleKeyDown}
        onBlur={this.handleSubmit}
      >
        {editing ? (
          <>
            <StyledInput
              value={internalValue}
              size={size}
              onChange={this.handleOnChange}
              autoFocus
            />
            <StyledButton size={size} appearance="primary" iconBefore="CHECK" />
            <StyledButton size={size} appearance="secondary" iconBefore="CROSS" />
          </>
        ) : (
          <Value size={size} canEdit={!isDisabled} onClick={this.startEditing}>
            {value}
          </Value>
        )}
      </StyledEditableInput>
    );
  }
}

EditableInput.defaultProps = {
  size: 'medium',
  isDisabled: false,
};

EditableInput.propTypes = {
  value: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isDisabled: PropTypes.bool,
};

export default EditableInput;
