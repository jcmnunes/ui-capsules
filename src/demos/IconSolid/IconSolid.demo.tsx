import React, { useState } from 'react';
import { IconSolidType, Select, SelectOption, IconSolid } from '../../lib';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { useIconSolidOpts } from './IconSolid.hooks';
import { GITHUB_URL } from './IconSolid.constants';

const IconSolidDemo = () => {
  const iconOpts = useIconSolidOpts();
  const [icon, setIcon] = useState(iconOpts[0]);

  const Component = <IconSolid icon={icon.value} />;

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Inputs>
        <div>
          <pre>icon</pre>
          <Select
            value={icon}
            options={iconOpts}
            onChange={opt => setIcon(opt as SelectOption<IconSolidType>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default IconSolidDemo;
