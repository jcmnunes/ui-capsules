import React, { useState } from 'react';
import { Input, Select } from '../../lib';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, VARIANT_OPTS } from './Alert.constants';
import { SelectOption } from '../../lib/types';
import { Alert } from '../../lib/Alert/Alert';
import { AlertVariant } from '../../lib/Alert/Alert.styles';

const AlertDemo = () => {
  const [title, setTitle] = useState('This is the title');
  const [message, setMessage] = useState('This is the message body!');
  const [variant, setVariant] = useState(VARIANT_OPTS[0]);
  const [key, setKey] = useState('initial');

  const Component = <Alert variant={variant.value} title={title} message={message} key={key} />;

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Inputs>
        <div>
          <pre>title</pre>
          <Input value={title} onChange={ev => setTitle(ev.target.value)} />
        </div>

        <div>
          <pre>message</pre>
          <Input value={message} onChange={ev => setMessage(ev.target.value)} />
        </div>

        <div>
          <pre>appearance</pre>
          <Select
            value={variant}
            options={VARIANT_OPTS}
            onChange={opt => {
              setVariant(opt as SelectOption<AlertVariant>);
              setKey(Date.now().toString());
            }}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default AlertDemo;
