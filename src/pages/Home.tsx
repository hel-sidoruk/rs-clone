import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTypedSelector from '../hooks/useTypedSelector';

export const Home = ({ title }: { title: string }) => {
  const { isAuthorized } = useTypedSelector((state) => state.authorizedUser);

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="home">
      <h1 className="home__title">
        <span>Achieve mastery</span>
        {'\nthrough challenge'}
      </h1>
      <p className="home__text">
        {
          'Improve your development skills by training with your peers on code kata that continuously\nchallenge and push your coding practice.'
        }
      </p>
      <Link className="home__btn" to={isAuthorized ? '/kata' : '/login'}>
        Get started
      </Link>
    </div>
  );
};
