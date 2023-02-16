import React from 'react';
import { useParams } from 'react-router-dom';
import Article from '../components/Article';
import { HiddenDescription } from '../components/Kata/HiddenDescription';
import { SortBlock } from '../components/Kata/SortBlock';
import { CommentForm } from '../components/KataDiscuss/CommentForm';
import { CommentsList } from '../components/KataDiscuss/CommentsList';

export const KataDiscuss = () => {
  const { id } = useParams();

  return (
    <>
      <HiddenDescription />
      <div className="section solution-main">
        <div className="left-bar">
          <div className="sort">
            <SortBlock title="View" items={['All', 'Issue', 'Questions', 'Suggestions']} />
          </div>
          <Article />
          <Article />
        </div>
        <div className="section comments-section">
          <CommentForm kataId={id as string} />
          <CommentsList kataId={id as string} />
        </div>
      </div>
    </>
  );
};
