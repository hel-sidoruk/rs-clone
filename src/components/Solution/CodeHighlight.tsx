import React, { useEffect, useRef } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { DECLARATION_REGEX, KEY_WORDS, STR_REGEX } from '../../utils';

const purple = (word: string) => `<span class="purple-text">${word}</span>`;
const green = (word: string) => `<span class="green-text">${word}</span>`;
const orange = (word: string) => `<span class="orange-text">${word}</span>`;

export const CodeHighlight = ({ text }: { text: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let coloredText = text;
    const colored: { [key: string]: string } = {};
    const stringMatches = text.match(STR_REGEX);
    const declarationMatches = text.match(DECLARATION_REGEX);

    stringMatches && stringMatches.forEach((value) => (colored[value] = green(value)));

    declarationMatches &&
      declarationMatches.forEach((value) => {
        const [operator, declaration] = value.split(' ');
        colored[value] = [operator, orange(declaration)].join(' ');
      });

    KEY_WORDS.forEach((operator) => (colored[operator] = purple(operator)));

    Object.keys(colored).forEach((key) => {
      if (coloredText.includes(key)) {
        if (key.match(/(let|const|var|function) [a-z]+/))
          coloredText = coloredText.replace(key, colored[key]);
        else coloredText = coloredText.replaceAll(key, colored[key]);
      }
    });

    if (ref.current) ref.current.innerHTML = coloredText;
  }, [text]);

  return <div ref={ref}></div>;
};
