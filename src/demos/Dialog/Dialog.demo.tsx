import React, { useState } from 'react';
import { Button, Input, Dialog, Checkbox } from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL } from './Dialog.constants';

const DialogDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('Delete file');
  const [message, setMessage] = useState('Are you sure you want to delete this file?');
  const [contentLabel, setContentLabel] = useState('Example dialog');

  const Component = (
    <Button appearance="primary" iconBefore="eye" onClick={() => setIsOpen(true)}>
      Open Dialog
    </Button>
  );

  const code = `<Dialog
  isOpen={${isOpen}}
  onRequestClose={() => setIsOpen(false)}
  contentLabel="${contentLabel}"
  actions={[
    {
      name: 'Cancel',
      appearance: 'secondary',
      action: () => setIsOpen(false),
    },
    {
      name: 'Delete',
      appearance: 'error',
      action: () => alert('Delete action called'),
    },
  ]}
  title={${title}}
  message={${message}}
/>
`;

  return (
    <Demo codeURL={GITHUB_URL} component={Component} code={code}>
      <Booleans>
        <Checkbox checked={isOpen} onChange={() => setIsOpen(!isOpen)} appearance="success">
          <pre>isOpen</pre>
        </Checkbox>
      </Booleans>
      <Inputs>
        <div>
          <pre>title</pre>
          <Input type="text" value={title} onChange={ev => setTitle(ev.target.value)} />
        </div>
        <div>
          <pre>message</pre>
          <Input type="text" value={message} onChange={ev => setMessage(ev.target.value)} />
        </div>
        <div>
          <pre>contentLabel</pre>
          <Input
            type="text"
            value={contentLabel}
            onChange={ev => setContentLabel(ev.target.value)}
          />
        </div>
      </Inputs>

      <Dialog
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        actions={[
          {
            name: 'Cancel',
            appearance: 'secondary',
            action: () => setIsOpen(false),
          },
          {
            name: 'Delete file',
            appearance: 'error',
            // eslint-disable-next-line no-alert
            action: () => alert('Delete action called'),
          },
        ]}
        title={title}
        message={message}
      />
    </Demo>
  );
};

export default DialogDemo;
