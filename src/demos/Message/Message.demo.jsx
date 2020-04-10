import React, { useState } from 'react';
import { Message, Select, Input } from '../../lib';
import Demo, { StyledSelect } from '../../components/Demo/Demo';
import { GITHUB_URL, APPEARANCE_OPTS } from './Message.constants';

const MessageDemo = () => {
  const [children, setChildren] = useState(
    'This is the message body! It can be a React component too.',
  );
  const [appearance, setAppearance] = useState(APPEARANCE_OPTS[0]);
  const [key, setKey] = useState('initial');

  const Component = (
    <Message appearance={appearance.value} key={key}>
      {children}
    </Message>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <>
        <StyledSelect>
          <pre>children</pre>
          <Input value={children} onChange={ev => setChildren(ev.target.value)} />
        </StyledSelect>
        <StyledSelect>
          <pre>appearance</pre>
          <Select
            value={appearance}
            options={APPEARANCE_OPTS}
            onChange={opt => {
              setAppearance(opt);
              setKey(Date.now().toString());
            }}
          />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default MessageDemo;
