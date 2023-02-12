import React from 'react';
import { Link } from 'react-router-dom';
import { articleList, getRandomIndex } from '../utils';

const Article = () => {
  const { title, description, previewImg, url } =
    articleList[getRandomIndex(0, articleList.length)];

  return (
    <div className="article">
      <Link className="article__link" to={url}>
        <div className="article__preview">
          <img src={previewImg} alt="preview" />
        </div>
        <div className="article__content">
          <div className="article__title">{title}</div>
          <div className="article__description">{description}</div>
        </div>
      </Link>
    </div>
  );
};
export default Article;
