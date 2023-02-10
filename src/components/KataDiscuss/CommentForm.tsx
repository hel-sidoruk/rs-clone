import React, { useState } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { FormDropdown } from './FormDropdown';

export const CommentForm = () => {
  const [comment, setComment] = useState('');
  const { avatar } = useTypedSelector((state) => state.account);
  const [isActive, setIsActive] = useState(false);

  const closeDiscuss = () => setIsActive(false);

  return (
    <div className="comment-form">
      <div className="avatar">
        <img src={avatar as string} alt="avatar" />
      </div>
      <div className={`input-field ${isActive ? 'active' : ''}`}>
        <textarea
          className="comment-form__input"
          placeholder="Leave feedback..."
          onChange={(e) => setComment(e.target.value)}
          onClick={() => {
            if (!isActive) setIsActive(true);
          }}
          value={comment}
        />
        <div className="comment-form__actions">
          <FormDropdown />
          <button className="btn btn-fill" onClick={() => console.log(comment)}>
            Post
          </button>
          <button className="btn" onClick={closeDiscuss}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
