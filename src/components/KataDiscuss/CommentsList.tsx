import { nanoid } from 'nanoid';
import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import Loader from '../UI/Loader';
import { Comment } from './Comment';

export const CommentsList = () => {
  const { loading, comments } = useTypedSelector((state) => state.comments);

  if (loading) return <Loader />;
  return (
    <div>
      {comments.length
        ? comments.map((comment) => <Comment comment={comment} key={nanoid()} />)
        : null}
    </div>
  );
};
