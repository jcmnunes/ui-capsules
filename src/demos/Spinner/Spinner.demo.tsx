import React, { useState } from 'react';
import { ElementSize, Select, SelectOption, Spinner, VariantColor } from '../../lib';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL } from './Spinner.constants';
import { SIZE_OPTS, VARIANT_COLOR_OPTS } from '../common/selectOptions';

const SpinnerDemo = () => {
  const [size, setSize] = useState(SIZE_OPTS[1]);
  const [variantColor, variantColorSet] = useState(
    VARIANT_COLOR_OPTS.find(opt => opt.value === 'primary')!,
  );

  const Component = <Spinner size={size.value} variantColor={variantColor.value} />;

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Inputs>
        <div>
          <Select
            label="size"
            value={size}
            options={SIZE_OPTS}
            onChange={opt => setSize(opt as SelectOption<ElementSize>)}
          />
        </div>

        <div>
          <Select
            label="variantColor"
            value={variantColor}
            options={VARIANT_COLOR_OPTS}
            onChange={opt => variantColorSet(opt as SelectOption<VariantColor>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default SpinnerDemo;
