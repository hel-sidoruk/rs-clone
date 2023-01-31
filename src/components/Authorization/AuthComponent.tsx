import React from 'react';
import { Link } from 'react-router-dom';
import { AuthForm } from './AuthForm';
import { GithubAuthButton } from './GithubAuthButton';
import { SignUpSuggest } from './SignUpSuggest';

export const AuthComponent = ({ option }: { option: 'login' | 'registration' }) => {
  const isLoginPage = option === 'login';

  return (
    <div className="auth__form-container">
      <Link to="/" className="auth__home-link">
        <img src="/logo-square.png" />
      </Link>
      <GithubAuthButton option={option} />
      <div className="auth__line">
        <span>OR</span>
      </div>
      <AuthForm option={option} />
      {isLoginPage && <SignUpSuggest />}
    </div>
  );
};
