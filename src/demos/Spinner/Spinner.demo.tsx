import React, { useState } from 'react';
import { Select, Spinner, ElementSize, SelectOption } from '../../lib';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL } from './Spinner.constants';
import { SIZE_OPTS, VARIANT_COLOR_OPTS } from '../common/selectOptions';
import { ThemeColors } from '../../lib/theme';

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
          <pre>size</pre>
          <Select
            value={size}
            options={SIZE_OPTS}
            onChange={opt => setSize(opt as SelectOption<ElementSize>)}
          />
        </div>

        <div>
          <pre>variantColor</pre>
          <Select
            value={variantColor}
            options={VARIANT_COLOR_OPTS}
            onChange={opt => variantColorSet(opt as SelectOption<ThemeColors>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default SpinnerDemo;
