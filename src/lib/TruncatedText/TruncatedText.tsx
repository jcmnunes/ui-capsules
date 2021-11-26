import React, { useEffect, useRef, useState } from 'react';
import { Text } from '../Text/Text';
import { Tooltip } from '../Tooltip/Tooltip';

export const isTruncated = (node: HTMLElement) => {
  if (!node) {
    return false;
  }

  return node.scrollWidth > node.clientWidth;
};

export const TruncatedText: React.FC<any> = ({ children, ...rest }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = contentRef.current;

    if (!node) {
      return;
    }

    setShowTooltip(isTruncated(node));
  }, [children]);

  const Content = (
    <Text ref={contentRef} isTruncated {...rest}>
      {children}
    </Text>
  );

  if (!showTooltip) {
    return Content;
  }

  return <Tooltip label={children}>{Content}</Tooltip>;
};
