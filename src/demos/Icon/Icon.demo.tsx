import React, { useState } from 'react';
import { Select, Icon, IconType, SelectOption, IconVariant } from '../../lib';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { useIconOpts } from './Icon.hooks';
import { GITHUB_URL } from './Icon.constants';
import { ICON_VARIANT_OPTS } from '../common/selectOptions';

const IconDemo = () => {
  const iconOpts = useIconOpts();
  const [icon, setIcon] = useState(iconOpts[0]);
  const [variant, setVariant] = useState(ICON_VARIANT_OPTS[0]);

  const Component = <Icon icon={icon.value} variant={variant.value} />;

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Inputs>
        <div>
          <pre>icon</pre>
          <Select
            value={icon}
            options={iconOpts}
            onChange={opt => setIcon(opt as SelectOption<IconType>)}
          />
        </div>

        <div>
          <pre>variant</pre>
          <Select
            value={variant}
            options={ICON_VARIANT_OPTS}
            onChange={opt => setVariant(opt as SelectOption<IconVariant>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default IconDemo;
