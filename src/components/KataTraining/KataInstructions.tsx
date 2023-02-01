import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import { KataInterface } from '../../types/kata';
import { TagsBlock } from '../Kata/TagsBlock';

export const KataInstructions = () => {
  const { id } = useParams();
  const { katas } = useTypedSelector((state) => state.katas);
  const [kata, setKata] = useState<KataInterface | null>(null);

  useEffect(() => {
    if (katas && id) setKata(katas[id]);
  }, [katas]);
  return (
    <div className="description">
      <div className="markdown mb-32">
        {kata && <p>{kata.description}</p>}
        {/* <p>
          Complete the method/function so that it converts dash/underscore delimited words into{' '}
          <a href="https://en.wikipedia.org/wiki/Camel_case" target="_blank" rel="noreferrer">
            camel casing
          </a>
          . The first word within the output should be capitalized <strong>only</strong> if the
          original word was capitalized (known as Upper Camel Case, also often referred to as Pascal
          case). The next words should be always capitalized.
        </p>
        <h3 id="examples">Examples</h3>
        <p>
          <code>&quot;the-stealth-warrior&quot;</code> gets converted to{' '}
          <code>&quot;theStealthWarrior&quot;</code>
          <br />
          <code>&quot;The_Stealth_Warrior&quot;</code> gets converted to{' '}
          <code>&quot;TheStealthWarrior&quot;</code>
        </p> */}
      </div>
      <hr />
      <TagsBlock />
    </div>
  );
};
