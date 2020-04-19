import React, { useState } from 'react';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { Anchor, Input, Select } from '../../lib';
import { GITHUB_URL, HREF_OPTS } from './Anchor.constants';
import { SelectOption } from '../../lib/types';

const AnchorDemo = () => {
  const [href, setHref] = useState(HREF_OPTS[0]);
  const [children, setChildren] = useState('Go to example website');

  const Component = <Anchor href={href.value}>{children}</Anchor>;

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Inputs>
        <div>
          <pre>href</pre>
          <Select
            value={href}
            options={HREF_OPTS}
            onChange={opt => setHref(opt as SelectOption<string>)}
          />
        </div>
        <div>
          <pre>children</pre>
          <Input type="text" value={children} onChange={ev => setChildren(ev.target.value)} />
        </div>
      </Inputs>
    </Demo>
  );
};

export default AnchorDemo;
