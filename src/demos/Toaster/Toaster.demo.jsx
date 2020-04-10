import React, { useState } from 'react';
import Demo, { StyledSelect } from '../../components/Demo/Demo';
import { GITHUB_URL, TOAST_TYPE_OPTS } from './Toaster.constants';
import { Toaster, Button, Select, Input } from '../../lib';

const toastType2Appearance = {
  info: 'primary',
  success: 'success',
  warning: 'warning',
  error: 'error',
};

const ToasterDemo = () => {
  const [toastType, setToastType] = useState(TOAST_TYPE_OPTS[0]);
  const [toastTitle, setToastTitle] = useState('Done!');
  const [toastMessage, setToastMessage] = useState('Super awesome notification 😎');

  const Component = (
    <Button
      appearance={toastType2Appearance[toastType.value]}
      isDisabled={toastTitle.length === 0 && toastMessage.length === 0}
      iconBefore="bell"
      onClick={() => Toaster[toastType.value]({ title: toastTitle, message: toastMessage })}
    >
      Give me a toast
    </Button>
  );

  const code = `<Button
  appearance={${toastType2Appearance[toastType.value]}}
  onClick={() =>
    Toaster.${toastType.value}({
      title: ${toastTitle},
      message: ${toastMessage},
    })
  }
  iconBefore="bell"
>
  Give me a toast
</Button>
`;

  return (
    <Demo codeURL={GITHUB_URL} component={Component} code={code}>
      <>
        <StyledSelect>
          <pre>Adjust the toast type</pre>
          <Select value={toastType} options={TOAST_TYPE_OPTS} onChange={opt => setToastType(opt)} />
        </StyledSelect>
        <StyledSelect>
          <pre>Adjust the toast title</pre>
          <Input value={toastTitle} onChange={ev => setToastTitle(ev.target.value)} />
        </StyledSelect>
        <StyledSelect>
          <pre>Adjust the toast message</pre>
          <Input value={toastMessage} onChange={ev => setToastMessage(ev.target.value)} />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default ToasterDemo;
