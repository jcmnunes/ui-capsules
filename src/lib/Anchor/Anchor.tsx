import React from 'react';
import { Button } from '../Button/Button';

interface Props {
  href: string;
}

export const Anchor: React.FC<Props> = ({ href, children, ...other }) => {
  return (
    <Button href={href} as="a" appearance="link" {...other}>
      {children}
    </Button>
  );
};
Anchor.displayName = 'Anchor';
