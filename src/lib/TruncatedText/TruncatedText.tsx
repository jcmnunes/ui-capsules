import React, { useCallback, useState } from 'react';
import { Text, TextProps } from '../Text/Text';
import { Tooltip } from '../Tooltip/Tooltip';

export const isTruncated = (node: any) => {
  if (!node) {
    return false;
  }

  return node.scrollWidth > node.clientWidth;
};

export const TruncatedText: React.FC<TextProps> = ({ children, ...rest }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const ref = useCallback(node => {
    if (!node) {
      return;
    }

    setShowTooltip(isTruncated(node));
  }, []);

  return (
    <Tooltip content={children} delay={[1000, 0]} disabled={!showTooltip} placement="top">
      <Text ref={ref} isTruncated {...rest}>
        {children}
      </Text>
    </Tooltip>
  );
};
