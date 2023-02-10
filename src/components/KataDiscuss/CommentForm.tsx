import React, { useState } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';

export const CommentForm = () => {
  const [discuss, setDiscuss] = useState('');
  const { avatar } = useTypedSelector((state) => state.account);

  const feedBackInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setDiscuss(e.currentTarget.value);
  };

  const closeDiscuss = () => {
    setDiscuss('');
  };

  return (
    <div className="comment-form">
      <div className="avatar">
        <img src={avatar as string} alt="avatar" />
      </div>
      <div className="input-field">
        <textarea
          className="comment-form__input"
          placeholder="Leave feedback..."
          onInput={feedBackInput}
          value={discuss}
        />
        <label className="feedback-label">
          <button className="btn btn-fill" onClick={() => console.log('send')}>
            Post
          </button>
          <button className="btn" onClick={closeDiscuss}>
            Cancel
          </button>
        </label>
      </div>
    </div>
  );
};
