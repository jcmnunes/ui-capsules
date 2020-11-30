import React, { useState } from 'react';
import { Skeleton, Input, theme, Checkbox } from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL } from './Skeleton.constants';

const SkeletonDemo = () => {
  const [circular, setCircular] = useState(false);
  const [width, setWidth] = useState('150px');
  const [height, setHeight] = useState('30px');
  const [background, setBackground] = useState(theme.neutral100);

  const Component = <Skeleton circular={circular} width={width} height={height} bg={background} />;

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox checked={circular} onChange={() => setCircular(!circular)}>
          <pre>circular</pre>
        </Checkbox>
      </Booleans>
      <Inputs>
        <div>
          <pre>width</pre>
          <Input value={width} onChange={ev => setWidth(ev.target.value)} />
        </div>
        <div>
          <pre>height</pre>
          <Input value={height} onChange={ev => setHeight(ev.target.value)} />
        </div>
        <div>
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
        </div>
      </Inputs>
    </Demo>
  );
};

export default SkeletonDemo;
