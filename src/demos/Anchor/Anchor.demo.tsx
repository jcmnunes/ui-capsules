import React, { useState } from 'react';
import { Anchor, Input, Select, SelectOption } from '../../lib';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, HREF_OPTS } from './Anchor.constants';

const AnchorDemo = () => {
  const [href, setHref] = useState(HREF_OPTS[0]);
  const [children, setChildren] = useState('Go to example website');

  const Component = <Anchor href={href.value}>{children}</Anchor>;

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Inputs>
        <div>
          <Select
            label="href"
            value={href}
            options={HREF_OPTS}
            onChange={opt => setHref(opt as SelectOption<string>)}
          />
        </div>

        <div>
          <Input
            label="children"
            type="text"
            value={children}
            onChange={ev => setChildren(ev.target.value)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default AnchorDemo;
