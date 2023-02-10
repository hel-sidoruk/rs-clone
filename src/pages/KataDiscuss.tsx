import React from 'react';
import LeftBarForSolutions from '../components/Kata/leftBarForSolutions';
import { Comment } from '../components/KataDiscuss/Comment';
import { CommentForm } from '../components/KataDiscuss/CommentForm';

export const KataDiscuss = () => {
  return (
    <>
      <div className="section solution-main">
        <LeftBarForSolutions sol={false} />
        <div className="section">
          <CommentForm />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </>
  );
};
