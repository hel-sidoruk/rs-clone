import dayjs from 'dayjs';
import React from 'react';
import { Link } from 'react-router-dom';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { CommentInterface } from '../../types/comments';
import { CommentVoter } from './CommentVoter';
import { SpoilerFlag } from './SpoilerFlag';

export const Comment = ({ kataId, comment }: { kataId: string; comment: CommentInterface }) => {
  const { username } = useTypedSelector((state) => state.account);
  const { deleteComment } = useActions();

  const isAccountComment = comment.username === username;

  const deleteByClick = () => deleteComment(kataId, comment.id);

  return (
    <div className="comment">
      <Link className="avatar" to={`/users/${comment.username}`}>
        <img src={comment.avatar} alt="avatar" />
      </Link>
      <div className="comment__content">
        <div className="comment__header">
          <Link className="link" to={`/users/${comment.username}`}>
            {comment.username}
          </Link>
          <span className="comment__rank">({comment.rank})</span>
          <div className="bullet"></div>
          <div>{dayjs(comment.createdAt).fromNow()}</div>
          {comment.label && (
            <div className={`keyword-tag ${comment.label.toLowerCase()}`}>{comment.label}</div>
          )}
        </div>
        <div className="comment__body">
          <p>{comment.text}</p>
        </div>

        <div className="comment__actions">
          <CommentVoter
            id={comment.id}
            kataId={kataId}
            votes={comment.votes}
            isAccount={isAccountComment}
          />
          <div className="bullet"></div>
          {isAccountComment && (
            <>
              <div className="link">
                <i className="icon-moon-edit icon-moon"></i>Edit
              </div>
              <div className="bullet"></div>
            </>
          )}
          <SpoilerFlag spoiler={comment.spoiler} id={comment.id} kataId={kataId} />
          {isAccountComment && (
            <>
              <div className="bullet"></div>
              <div className="link" onClick={deleteByClick}>
                <i className="icon-moon-trash icon-moon"></i>Remove
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
