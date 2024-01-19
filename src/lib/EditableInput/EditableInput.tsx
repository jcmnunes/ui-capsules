import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  FormEvent,
  KeyboardEvent,
  Reducer,
  useReducer,
} from 'react';
import { IconButton } from '../IconButton/IconButton';
import { ElementSize } from '../types';
import { Buttons, StyledEditableInput, StyledInput, Value, Text } from './EditableInput.styles';

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
  size?: ElementSize;
  isReadonly?: boolean;
  hasButtons?: boolean;
  action(internalValue: string): void;
}

export const EditableInput: FC<Props> = ({
  value,
  action,
  size = 'medium',
  isReadonly = false,
  hasButtons = false,
}) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, initialState);

  const startEditing = () => {
    if (isReadonly) return;
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

    if (internalValue !== value) {
      action(internalValue);
    }

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
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
          {hasButtons && (
            <Buttons>
              <IconButton type="submit" size="small" icon="check" style={{ marginRight: 4 }} />
              <IconButton size="small" variant="secondary" icon="x" onClick={handleCancel} />
            </Buttons>
          )}
        </>
      ) : (
        <Value
          as={isReadonly ? 'span' : 'button'}
          $size={size}
          $canEdit={!isReadonly}
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
  isReadonly: false,
  hasButtons: false,
};
