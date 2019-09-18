/* eslint-disable no-alert */
import React, { useState } from 'react';
import Demo, { Booleans, StyledCheckbox, StyledSelect } from '../../components/Demo/Demo';
import { useIconOpts } from '../Icon24/Icon24.hooks';
import IconButton from '../../lib/IconButton/IconButton';
import Select from '../../lib/Select/Select';
import Input from '../../lib/Input/Input';
import Button from '../../lib/Button/Button';
import { DEFAULT_COLORS, DEFAULT_TEXT_COLOR, GITHUB_URL } from './IconButton.constants';

const IconButtonDemo = () => {
  const getNewColorsArray = (index, newValue) => {
    const newArr = [...colors];
    newArr[index] = newValue;
    return newArr;
  };

  const iconOpts = useIconOpts();
  const [colors, setColors] = useState(DEFAULT_COLORS);
  const [textColor, setTextColor] = useState(DEFAULT_TEXT_COLOR);
  const [icon, setIcon] = useState(iconOpts[0]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const [isRound, setIsRound] = useState(false);
  const [hasChev, setHasChev] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const [text, setText] = useState('');
  const [size, setSize] = useState('24px');

  const Component = (
    <IconButton
      icon={icon.value}
      text={text}
      textColor={textColor}
      colors={colors}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isBlock={isBlock}
      isRound={isRound}
      hasChev={hasChev}
      hasBackground={hasBackground}
      size={size}
      onClick={() => alert('You clicked the (icon) button 😎✌️')}
    />
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <>
        <Booleans>
          <StyledCheckbox
            checked={isLoading}
            onChange={() => setIsLoading(!isLoading)}
            appearance="success"
          >
            <pre>isLoading</pre>
          </StyledCheckbox>
          <StyledCheckbox
            checked={isDisabled}
            onChange={() => setIsDisabled(!isDisabled)}
            appearance="success"
          >
            <pre>isDisabled</pre>
          </StyledCheckbox>
          <StyledCheckbox
            checked={isBlock}
            onChange={() => setIsBlock(!isBlock)}
            appearance="success"
          >
            <pre>isBlock</pre>
          </StyledCheckbox>
          <StyledCheckbox
            checked={isRound}
            onChange={() => setIsRound(!isRound)}
            appearance="success"
          >
            <pre>isRound</pre>
          </StyledCheckbox>
          <StyledCheckbox
            checked={hasChev}
            onChange={() => setHasChev(!hasChev)}
            appearance="success"
          >
            <pre>hasChev</pre>
          </StyledCheckbox>
          <StyledCheckbox
            checked={hasBackground}
            onChange={() => setHasBackground(!hasBackground)}
            appearance="success"
          >
            <pre>hasBackground</pre>
          </StyledCheckbox>
        </Booleans>
        <StyledSelect>
          <pre>icon</pre>
          <Select value={icon} options={iconOpts} onChange={opt => setIcon(opt)} />
        </StyledSelect>
        <StyledSelect>
          <pre>text</pre>
          <Input
            placeholder="Insert some text"
            type="text"
            value={text}
            onChange={ev => setText(ev.target.value)}
          />
        </StyledSelect>
        <StyledSelect>
          <pre>size</pre>
          <Input
            placeholder="Insert the size of the IconButton"
            type="text"
            value={size}
            onChange={ev => setSize(ev.target.value)}
          />
        </StyledSelect>
        <StyledSelect>
          <pre>colors[0]</pre>
          <label htmlFor="colors[0]">
            <input
              id="colors[0]"
              type="color"
              value={colors[0]}
              onChange={ev => setColors(getNewColorsArray(0, ev.target.value))}
            />{' '}
            {colors[0].toUpperCase()}
          </label>
        </StyledSelect>
        <StyledSelect>
          <pre>colors[1]</pre>
          <label htmlFor="colors[1]">
            <input
              id="colors[1]"
              type="color"
              value={colors[1]}
              onChange={ev => setColors(getNewColorsArray(1, ev.target.value))}
            />{' '}
            {colors[1].toUpperCase()}
          </label>
        </StyledSelect>
        <StyledSelect>
          <pre>colors[2]</pre>
          <label htmlFor="colors[2]">
            <input
              id="colors[2]"
              type="color"
              value={colors[2]}
              onChange={ev => setColors(getNewColorsArray(2, ev.target.value))}
            />{' '}
            {colors[2].toUpperCase()}
          </label>
        </StyledSelect>
        <StyledSelect>
          <pre>colors[3]</pre>
          <label htmlFor="colors[3]">
            <input
              id="colors[3]"
              type="color"
              value={colors[3]}
              onChange={ev => setColors(getNewColorsArray(3, ev.target.value))}
            />{' '}
            {colors[3].toUpperCase()}
          </label>
        </StyledSelect>
        <StyledSelect>
          <pre>colors[4]</pre>
          <label htmlFor="colors[4]">
            <input
              id="colors[4]"
              type="color"
              value={colors[4]}
              onChange={ev => setColors(getNewColorsArray(4, ev.target.value))}
            />{' '}
            {colors[4].toUpperCase()}
          </label>
        </StyledSelect>
        <StyledSelect>
          <pre>textColor</pre>
          <label htmlFor="colors[5]">
            <input
              id="colors[5]"
              type="color"
              value={textColor}
              onChange={ev => setTextColor(ev.target.value)}
            />{' '}
            {textColor.toUpperCase()}
          </label>
        </StyledSelect>
        <Button
          iconBefore="UNDO"
          appearance="minimal"
          size="small"
          onClick={() => {
            setColors(DEFAULT_COLORS);
            setTextColor(DEFAULT_TEXT_COLOR);
          }}
        >
          Reset color defaults
        </Button>
      </>
    </Demo>
  );
};

export default IconButtonDemo;
