import React from 'react';
import { useParams } from 'react-router-dom';
import LeftBarForSolutions from '../components/Kata/leftBarForSolutions';
import { CommentForm } from '../components/KataDiscuss/CommentForm';
import { CommentsList } from '../components/KataDiscuss/CommentsList';

export const KataDiscuss = () => {
  const { id } = useParams();

  return (
    <div className="section solution-main">
      <LeftBarForSolutions sol={false} />
      <div className="section comments-section">
        <CommentForm kataId={id as string} />
        <CommentsList kataId={id as string} />
      </div>
    </div>
  );
};
