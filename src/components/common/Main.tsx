import React, { useEffect, useRef } from 'react';

let firstLoad = true;

export const Main: React.FC = ({ children }) => {
  const contentFocusRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (firstLoad) {
      firstLoad = false;
    } else if (contentFocusRef.current) {
      const sectionHeading = contentFocusRef.current.querySelector('h1');
      const focusNode = sectionHeading || contentFocusRef.current;

      focusNode.tabIndex = -1;
      focusNode.focus();
    }
  }, []);

  return <main ref={contentFocusRef}>{children}</main>;
};
