import React, { useState } from 'react';
import { DualSize, Select, SelectOption, Spinner } from '../../lib';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, SIZE_OPTS, VARIANT_OPTS } from './Spinner.constants';

const SpinnerDemo = () => {
  const [size, setSize] = useState(SIZE_OPTS[0]);
  const [variant, setVariant] = useState(VARIANT_OPTS[0]);

  const Component = <Spinner size={size.value} variant={variant.value} />;

  return (
    <Demo codeURL={GITHUB_URL} component={Component} isDark={variant.value === 'light'}>
      <Inputs>
        <div>
          <Select
            label="size"
            value={size}
            options={SIZE_OPTS}
            onChange={opt => setSize(opt as SelectOption<DualSize>)}
          />
        </div>

        <div>
          <Select
            label="variantColor"
            value={variant}
            options={VARIANT_OPTS}
            onChange={opt => setVariant(opt as SelectOption<'light' | 'dark'>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default SpinnerDemo;
