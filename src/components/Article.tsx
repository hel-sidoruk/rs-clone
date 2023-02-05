import React from 'react';
import { Link } from 'react-router-dom';
import preview from '../assets/images/article-preview.png';

const Article = () => {
  return (
    <div className="article">
      <Link
        className="article__link"
        to="https://www.codewars.com/post/developer-productivity-a-guide-to-entering-the-flow-state"
      >
        <div className="article__preview">
          <img src={preview} alt="preview" />
        </div>
        <div className="article__content">
          <div className="article__title">Developer Productivity: A guide to finding flow</div>
          <div className="article__description">
            Find out to harness your flow for more higher productivity.
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Article;
