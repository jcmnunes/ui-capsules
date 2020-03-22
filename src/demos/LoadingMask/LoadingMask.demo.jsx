import React, { useState } from 'react';
import { LoadingMask } from '../../lib/LoadingMask/LoadingMask';
import { Input } from '../../lib/Input/Input';
import Demo, { Booleans, StyledCheckbox, StyledSelect } from '../../components/Demo/Demo';
import { GITHUB_URL } from './LoadingMask.constants';
import { theme } from '../../lib/theme';

const LoadingMaskDemo = () => {
  const [circular, setCircular] = useState(false);
  const [width, setWidth] = useState('150px');
  const [height, setHeight] = useState('30px');
  const [background, setBackground] = useState(theme.neutral100);

  const Component = (
    <LoadingMask circular={circular} width={width} height={height} background={background} />
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <>
        <Booleans>
          <StyledCheckbox
            checked={circular}
            onChange={() => setCircular(!circular)}
            appearance="success"
          >
            <pre>circular</pre>
          </StyledCheckbox>
        </Booleans>
        <StyledSelect>
          <pre>width</pre>
          <Input value={width} onChange={ev => setWidth(ev.target.value)} />
        </StyledSelect>
        <StyledSelect>
          <pre>height</pre>
          <Input value={height} onChange={ev => setHeight(ev.target.value)} />
        </StyledSelect>
        <StyledSelect>
          <pre>background</pre>
          <label htmlFor="background">
            <input
              id="background"
              type="color"
              value={background}
              onChange={ev => setBackground(ev.target.value)}
            />{' '}
            {background.toUpperCase()}
          </label>
        </StyledSelect>
      </>
    </Demo>
  );
};

export default LoadingMaskDemo;
