import React from 'react';

export const KataInstructions = () => {
  return (
    <div className="description">
      <div className="markdown mb-32">
        <p>
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
        </p>
      </div>
      <hr />
      <div className="mt-16">
        <i className="icon-moon icon-moon-tag "></i>
        <div className="keyword-tag">Regular Expressions</div>
        <div className="keyword-tag">Algorithms</div>
        <div className="keyword-tag">Strings</div>
      </div>
    </div>
  );
};