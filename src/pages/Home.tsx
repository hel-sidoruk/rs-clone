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
      <div className="home__buttons">
        <Link className="buttons__btn" to={isAuthorized ? '/kata' : '/login'}>
          Get started
        </Link>
        <p className="buttons__desc">
          You must complete our beginner-friendly initiation challenge in order to sign up.
        </p>
      </div>
      <div className="home__sharpen">
        <div className="sharpen__text">
          <div className="text__icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg">
              <path
                fill="#fff"
                d="M14.2169 2.02378C14.7561 2.14359 15.096 2.67777 14.9762 3.2169L10.9762 21.2169C10.8564 21.756 10.3222 22.096 9.78307 21.9762C9.24394 21.8563 8.90401 21.3222 9.02381 20.783L13.0238 2.78304C13.1436 2.24391 13.6778 1.90398 14.2169 2.02378ZM7.70711 6.29286C8.09763 6.68339 8.09763 7.31655 7.70711 7.70708L3.41421 12L7.70711 16.2929C8.09763 16.6834 8.09763 17.3166 7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071L1.29289 12.7071C0.902369 12.3166 0.902369 11.6834 1.29289 11.2929L6.29289 6.29286C6.68342 5.90234 7.31658 5.90234 7.70711 6.29286ZM16.2929 6.29286C16.6834 5.90234 17.3166 5.90234 17.7071 6.29286L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071C15.9024 17.3166 15.9024 16.6834 16.2929 16.2929L20.5858 12L16.2929 7.70708C15.9024 7.31655 15.9024 6.68339 16.2929 6.29286Z"
              ></path>
            </svg>
          </div>
          <h2 className="text__title">Sharpen your coding skills</h2>
          <p className="text__desc">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Challenge yourself on small coding exercises called "kata". Each kata is crafted by the
            community to help you strengthen different coding skills. Master your current language
            of choice, or learn any of the 55+ programming languages supported.
          </p>
          <a href="https://www.codewars.com/join?country=us" className="text__butt">
            Join the Dojo
          </a>
        </div>
        <div className="sharpen__image">
          <img src="../../public/8ky.png" alt="8ky-image" className="image__img" />
        </div>
      </div>
    </div>
  );
};
