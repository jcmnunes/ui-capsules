import React, { useState } from 'react';
import Demo, { StyledSelect } from '../../components/Demo/Demo';
import { Anchor } from '../../lib/Anchor/Anchor';
import { Input } from '../../lib/Input/Input';
import { Select } from '../../lib/Select/Select';
import { GITHUB_URL, HREF_OPTS } from './Anchor.constants';

const AnchorDemo = () => {
  const [href, setHref] = useState(HREF_OPTS[0]);
  const [children, setChildren] = useState('Go to example website');

  const Component = <Anchor href={href.value}>{children}</Anchor>;

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <>
        <StyledSelect>
          <pre>href</pre>
          <Select value={href} options={HREF_OPTS} onChange={opt => setHref(opt)} />
        </StyledSelect>
        <StyledSelect>
          <pre>children</pre>
          <Input type="text" value={children} onChange={ev => setChildren(ev.target.value)} />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default AnchorDemo;
