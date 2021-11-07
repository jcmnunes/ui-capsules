import React, { useState } from 'react';
import { Skeleton, Input, Checkbox, Text } from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL } from './Skeleton.constants';

const SkeletonDemo = () => {
  const [circular, setCircular] = useState(false);
  const [width, setWidth] = useState('150px');
  const [height, setHeight] = useState('30px');

  const Component = <Skeleton circular={circular} css={{ width, height }} />;

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox checked={circular} onChange={() => setCircular(!circular)}>
          <Text variant="label">circular</Text>
        </Checkbox>
      </Booleans>

      <Inputs>
        <div>
          <Input label="width" value={width} onChange={ev => setWidth(ev.target.value)} />
        </div>

        <div>
          <Input label="height" value={height} onChange={ev => setHeight(ev.target.value)} />
        </div>
      </Inputs>
    </Demo>
  );
};

export default SkeletonDemo;
