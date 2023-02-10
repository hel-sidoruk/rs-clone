import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CommentsAPI } from '../../api';
import useTypedSelector from '../../hooks/useTypedSelector';
import { CommentLabel } from '../../types/comments';
import { FormDropdown } from './FormDropdown';

export const CommentForm = () => {
  const [comment, setComment] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [option, setOption] = useState<CommentLabel | 'No label'>('No label');
  const { id } = useParams();
  const { username, avatar, rank } = useTypedSelector((state) => state.account);

  const closeDiscuss = () => setIsActive(false);
  const openInput = () => !isActive && setIsActive(true);

  const postComment = () => {};

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
