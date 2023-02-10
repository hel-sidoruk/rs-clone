import React from 'react';
import { commentFormIcons } from '../../utils';

const info = {
  'No label': 'Keep the comment unlabeled if none of the below applies.',
  Issue:
    'Use the issue label when reporting problems with the kata.\nBe sure to explain the problem clearly and include the steps to reproduce.',
  Suggestion: 'Use the suggestion label if you have feedback on how this kata can be improved.',
  Question:
    "Use the question label if you have questions and/or need help solving the kata.\nDon't forget to mention the language you're using, and mark as having spoiler if you include your solution.",
};

interface Props {
  setOption: (s: string) => void;
  option: 'Issue' | 'No label' | 'Question' | 'Suggestion';
}

export const DropdownItem = ({ setOption, option }: Props) => {
  return (
    <li className="comment-form__dropdown-item" onClick={() => setOption(option)}>
      <span>
        {commentFormIcons[option] && <i className={`${commentFormIcons[option]} icon-moon`}></i>}
        {option}
      </span>
      <i className="info icon-moon-info icon-moon"></i>
      <div className="info-flyout">{info[option]}</div>
    </li>
  );
};
