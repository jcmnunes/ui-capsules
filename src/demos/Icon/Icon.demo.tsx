import React, { useState } from 'react';
import { Select, Icon, IconType, SelectOption } from '../../lib';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { useIconOpts } from './Icon.hooks';
import { GITHUB_URL } from './Icon.constants';

const IconDemo = () => {
  const iconOpts = useIconOpts();
  const [icon, setIcon] = useState(iconOpts[0]);

  const Component = <Icon icon={icon.value} />;

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
      </Inputs>
    </Demo>
  );
};

export default IconDemo;
