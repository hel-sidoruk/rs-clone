import React, { useState } from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { CommentLabel } from '../../types/comments';
import { FormDropdown } from './FormDropdown';

export const CommentForm = ({ kataId }: { kataId: string }) => {
  const [comment, setComment] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [option, setOption] = useState<CommentLabel | 'No label'>('No label');
  const { avatar } = useTypedSelector((state) => state.account);
  const { addComment } = useActions();

  const closeDiscuss = () => setIsActive(false);
  const openInput = () => !isActive && setIsActive(true);

  const postComment = () => {
    const label = option === 'No label' ? null : option;
    addComment(kataId, comment, label);
    setComment('');
    setIsActive(false);
  };

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
          onClick={openInput}
          value={comment}
          spellCheck={false}
        />
        <div className="comment-form__actions">
          <FormDropdown option={option} setOption={setOption} />
          <button className="btn btn-fill" onClick={postComment}>
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
