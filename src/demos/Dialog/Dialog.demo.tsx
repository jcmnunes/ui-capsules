import React, { useState } from 'react';
import { Button, Checkbox, Dialog, Input, Select, Status, Text } from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL } from './Dialog.constants';
import { STATUS_OPTS } from '../common/selectOptions';

const DialogDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('Delete file');
  const [message, setMessage] = useState('Are you sure you want to delete this file?');
  const [contentLabel, setContentLabel] = useState('Example dialog');
  const [variant, setVariant] = useState<Status>('warning');

  const Component = (
    <Button leftIcon="eye" onClick={() => setIsOpen(true)}>
      Open Dialog
    </Button>
  );

  const code = `<Dialog
  isOpen={${isOpen}}
  variant="${variant}"
  onRequestClose={() => setIsOpen(false)}
  contentLabel="${contentLabel}"
  actions={[
    {
      text: 'Cancel',
      variant: 'neutral',
      onClick: () => setIsOpen(false),
    },
    {
      text: 'Delete file',
      variant: 'error',
      onClick: () => alert('Delete action called'),
    },
  ]}
  title={${title}}
  message={${message}}
/>
`;

  return (
    <Demo codeURL={GITHUB_URL} component={Component} code={code}>
      <Booleans>
        <Checkbox checked={isOpen} onChange={() => setIsOpen(!isOpen)}>
          <Text variant="label">isOpen</Text>
        </Checkbox>
      </Booleans>

      <Inputs>
        <div>
          <Input
            label="title"
            type="text"
            value={title}
            onChange={ev => setTitle(ev.target.value)}
          />
        </div>

        <div>
          <Input
            label="message"
            type="text"
            value={message}
            onChange={ev => setMessage(ev.target.value)}
          />
        </div>

        <div>
          <Input
            label="contentLabel"
            type="text"
            value={contentLabel}
            onChange={ev => setContentLabel(ev.target.value)}
          />
        </div>

        <div>
          <Select
            label="variant"
            value={STATUS_OPTS.find(({ value }) => value === variant)}
            options={STATUS_OPTS}
            onChange={opt => {
              if (opt) {
                setVariant(opt.value);
              }
            }}
          />
        </div>
      </Inputs>

      <Dialog
        isOpen={isOpen}
        variant={variant}
        onClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        actions={[
          {
            text: 'Cancel',
            variant: 'ghostGray',
            onClick: () => setIsOpen(false),
          },
          {
            text: 'Delete file',
            variant: 'error',
            // eslint-disable-next-line no-alert
            onClick: () => alert('Delete action called'),
          },
        ]}
        title={title}
        message={message}
      />
    </Demo>
  );
};

export default DialogDemo;
