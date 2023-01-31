import React from 'react';
import { Link } from 'react-router-dom';
import { PasswordIcon } from '../Icons/PasswordIcon';
import { GithubAuthButton } from './GithubAuthButton';

export const AuthForm = ({ option }: { option: 'login' | 'registration' }) => {
  const isLoginPage = option === 'login';

  return (
    <div className="auth__form-container">
      <form>
        <Link to="/" className="auth__home-link">
          <img src="/logo-square.png" />
        </Link>
        <GithubAuthButton option={option} />
        <div className="auth__line">
          <span>OR</span>
        </div>
        <div className="auth__inputs-box">
          <div className="input-wrapper">
            <i className="icon-moon icon-moon-user"></i>
            <input className="auth__input" placeholder="username" type="text" />
          </div>
          <div className="input-wrapper">
            <PasswordIcon />
            <input className="auth__input" placeholder="password" type="password" />
          </div>
        </div>
        <button className="auth__submit-btn" type="submit">
          {isLoginPage ? 'Sign in' : 'Sign up'}
        </button>
      </form>
      {isLoginPage && (
        <div className="auth__registration-link">
          <Link className="underline" to="/registration">
            Sign up
          </Link>
          <span>if you don&apos;t have an account yet.</span>
        </div>
      )}
    </div>
  );
};
