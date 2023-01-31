import React, { useState } from 'react';
import { AccountAPI } from '../../api/AccountAPI';
import { PasswordIcon } from '../Icons/PasswordIcon';

export const AuthForm = ({ option }: { option: 'login' | 'registration' }) => {
  const isLoginPage = option === 'login';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isLoginPage
      ? AccountAPI.login({ username, password }).then(console.log)
      : AccountAPI.registration({ username, password }).then(console.log);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="auth__inputs-box">
        <div className="input-wrapper">
          <i className="icon-moon icon-moon-user"></i>
          <input
            className="auth__input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
        </div>
        <div className="input-wrapper">
          <PasswordIcon />
          <input
            className="auth__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
          />
        </div>
      </div>
      <button className={`auth__submit-btn ${isLoginPage ? 'indent' : ''}`} type="submit">
        {isLoginPage ? 'Sign in' : 'Sign up'}
      </button>
    </form>
  );
};
