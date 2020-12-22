import React, { useState } from 'react';
import { Button, Input, Select, Toaster } from '../../lib';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, TOAST_TYPE_OPTS } from './Toaster.constants';

const toastType2Appearance = {
  info: 'primary',
  success: 'success',
  warning: 'error',
  error: 'error',
};

const ToasterDemo = () => {
  const [toastType, setToastType] = useState(TOAST_TYPE_OPTS[0]);
  const [toastTitle, setToastTitle] = useState('Done!');
  const [toastMessage, setToastMessage] = useState('Super awesome notification 😎');

  const Component = (
    <Button
      variantColor={toastType2Appearance[toastType.value]}
      disabled={toastTitle.length === 0 && toastMessage.length === 0}
      leftIcon="bell"
      onClick={() => Toaster[toastType.value]({ title: toastTitle, message: toastMessage })}
    >
      Give me a toast
    </Button>
  );

  const code = `<Button
  variantColor={${toastType2Appearance[toastType.value]}}
  onClick={() =>
    Toaster.${toastType.value}({
      title: ${toastTitle},
      message: ${toastMessage}
    })
  }
  leftIcon="bell"
>
  Give me a toast
</Button>
`;

  return (
    <Demo codeURL={GITHUB_URL} component={Component} code={code}>
      <Inputs>
        <div>
          <pre>Toast type</pre>
          <Select value={toastType} options={TOAST_TYPE_OPTS} onChange={opt => setToastType(opt)} />
        </div>
        <div>
          <pre>title</pre>
          <Input value={toastTitle} onChange={ev => setToastTitle(ev.target.value)} />
        </div>
        <div>
          <pre>message</pre>
          <Input value={toastMessage} onChange={ev => setToastMessage(ev.target.value)} />
        </div>
      </Inputs>
    </Demo>
  );
};

export default ToasterDemo;
