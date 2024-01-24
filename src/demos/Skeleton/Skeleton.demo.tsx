import React, { useState } from 'react';
import { Skeleton, Input, Checkbox, Text } from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL } from './Skeleton.constants';

const SkeletonDemo = () => {
  const [isRound, setIsRound] = useState(false);
  const [width, setWidth] = useState(150);
  const [height, setHeight] = useState(30);

  const Component = <Skeleton isRound={isRound} width={width} height={height} />;

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox checked={isRound} onChange={() => setIsRound(!isRound)}>
          <Text variant="label">isRound</Text>
        </Checkbox>
      </Booleans>

      <Inputs>
        <div>
          <Input
            label="width"
            value={width}
            onChange={evt => {
              const val = Number(evt.target.value);

              if (!isNaN(val)) {
                setWidth(Number(evt.target.value));
              }
            }}
          />
        </div>

        <div>
          <Input
            label="height"
            value={height}
            onChange={evt => {
              const val = Number(evt.target.value);

              if (!isNaN(val)) {
                setHeight(Number(evt.target.value));
              }
            }}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default SkeletonDemo;
