import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AuthComponent } from '../components/Authorization/AuthComponent';
import useActions from '../hooks/useActions';

export const Authorization = ({ option }: { option: 'login' | 'registration' }) => {
  const [params] = useSearchParams();
  const { githubLogin, githubRegistration } = useActions();

  useEffect(() => {
    const { code } = Object.fromEntries(params.entries());
    if (!code) return;
    option === 'login' ? githubLogin(code) : githubRegistration(code);
  }, [params]);

  return (
    <div className="auth">
      <AuthComponent option={option} />
    </div>
  );
};
