import React, { ChangeEvent, FormEvent, KeyboardEvent, FocusEvent, useReducer } from 'react';
import styled from 'styled-components';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { theme } from '../theme';
import { Size } from '../types';

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
  position: relative;
`;

interface ValueProps {
  size: Size;
  canEdit: boolean;
}
const Value = styled.button<ValueProps>`
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

  &:focus {
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

const Buttons = styled.div`
  position: absolute;
  right: 0;
  bottom: -30px;
`;

const Text = styled.div`
  width: 0;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const initialState = {
  isInEditMode: false,
  internalValue: '',
  previousValue: '',
};

interface State {
  isInEditMode: boolean;
  internalValue: string;
  previousValue: string;
}

interface Action {
  type: 'START_EDITING' | 'UPDATE_INTERNAL_VALUE' | 'CANCEL_EDITING' | 'STOP_EDITING';
  value?: string;
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'START_EDITING':
      return {
        isInEditMode: true,
        internalValue: action.value!,
        previousValue: action.value!,
      };
    case 'UPDATE_INTERNAL_VALUE':
      return {
        ...state,
        internalValue: action.value!,
      };
    case 'CANCEL_EDITING':
      return {
        ...state,
        isInEditMode: false,
        internalValue: state.previousValue,
      };
    case 'STOP_EDITING':
      return {
        ...state,
        isInEditMode: false,
      };
    default:
      throw new Error();
  }
}

interface Props {
  value: string;
  action(internalValue: string): void;
  size?: Size;
  isEditable?: boolean;
  hasButtons?: boolean;
}

export const EditableInput: React.FC<Props> = ({
  value,
  action,
  size = 'medium',
  isEditable = true,
  hasButtons = false,
}) => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initialState);

  const startEditing = () => {
    if (!isEditable) return;
    dispatch({ type: 'START_EDITING', value });
  };

  const handleOnChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const newValue = ev.target.value;
    dispatch({ type: 'UPDATE_INTERNAL_VALUE', value: newValue });
  };

  const handleCancel = () => {
    dispatch({ type: 'CANCEL_EDITING', value });
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const { internalValue } = state;
    if (!internalValue) {
      return handleCancel();
    }
    internalValue !== value && action(internalValue);
    return dispatch({ type: 'STOP_EDITING' });
  };

  const handleKeyDown = (ev: KeyboardEvent) => {
    const { isInEditMode } = state;
    if (isInEditMode) {
      if (ev.key === 'Escape') {
        handleCancel();
      }
    }
  };

  const handleOnBlur = (ev: FocusEvent<HTMLFormElement>) => {
    if (hasButtons) {
      return undefined;
    }
    return handleSubmit(ev);
  };

  return (
    <StyledEditableInput onSubmit={handleSubmit} onKeyDown={handleKeyDown} onBlur={handleOnBlur}>
      {state.isInEditMode ? (
        <>
          <StyledInput
            value={state.internalValue}
            size={size}
            onChange={handleOnChange}
            autoFocus
          />
          {hasButtons && (
            <Buttons>
              <StyledButton type="submit" size="small" appearance="primary" iconBefore="CHECK" />
              <StyledButton
                size="small"
                appearance="secondary"
                iconBefore="CROSS"
                onClick={handleCancel}
              />
            </Buttons>
          )}
        </>
      ) : (
        <Value
          as={isEditable ? 'button' : 'span'}
          size={size}
          canEdit={isEditable}
          onClick={startEditing}
        >
          <Text title={value}>{value}</Text>
        </Value>
      )}
    </StyledEditableInput>
  );
};
EditableInput.displayName = 'EditableInput';

EditableInput.defaultProps = {
  size: 'medium',
  isEditable: true,
  hasButtons: false,
};
