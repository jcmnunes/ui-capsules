import React, { useState } from 'react';
import { Button, Input, Select, toast } from '../../lib';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, toastTypeOpts } from './Toast.constants';

const ToastDemo = () => {
  const [toastType, setToastType] = useState(toastTypeOpts[0]);
  const [toastTitle, setToastTitle] = useState('Done!');
  const [toastMessage, setToastMessage] = useState('Super awesome notification');

  const Component = (
    <Button
      disabled={toastTitle.length === 0 && toastMessage.length === 0}
      leftIcon="bell"
      onClick={() =>
        toast[toastType.value]({
          title: toastTitle,
          message: toastMessage,
        })
      }
    >
      Give me a toast
    </Button>
  );

  const code = `<Button
  onClick={() =>
    toast.${toastType.value}({
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
          <Select
            label="variant"
            value={toastType}
            options={toastTypeOpts}
            onChange={opt => setToastType(opt)}
          />
        </div>

        <div>
          <Input label="title" value={toastTitle} onChange={ev => setToastTitle(ev.target.value)} />
        </div>

        <div>
          <Input
            label="message"
            value={toastMessage}
            onChange={ev => setToastMessage(ev.target.value)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default ToastDemo;
