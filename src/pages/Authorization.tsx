import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthComponent } from '../components/Authorization/AuthComponent';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';

export const Authorization = ({ option }: { option: 'login' | 'registration' }) => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { githubLogin, githubRegistration } = useActions();
  const { isAuthorized } = useTypedSelector((state) => state.authorizedUser);

  useEffect(() => {
    const { code } = Object.fromEntries(params.entries());
    if (!code) return;
    option === 'login' ? githubLogin(code) : githubRegistration(code);
  }, [params]);

  useEffect(() => {
    isAuthorized && navigate('/');
  }, [isAuthorized]);

  return (
    <div className="auth">
      <AuthComponent option={option} />
    </div>
  );
};
