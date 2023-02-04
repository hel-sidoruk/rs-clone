import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import React, { useEffect, useRef } from 'react';

hljs.registerLanguage('javascript', javascript);

interface Props {
  className: string;
  children: React.ReactNode;
}

export const CodeHighlight = ({ children, className }: Props) => {
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (ref.current) hljs.highlightElement(ref.current);
  });

  return (
    <pre>
      <code ref={ref} className={className}>
        {children}
      </code>
    </pre>
  );
};
