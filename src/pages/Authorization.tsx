import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AuthComponent } from '../components/Authorization/AuthComponent';
import Loader from '../components/UI/Loader';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';

export const Authorization = ({ option }: { option: 'login' | 'registration' }) => {
  const [params] = useSearchParams();
  const { githubLogin, githubRegistration } = useActions();
  const { loading } = useTypedSelector((state) => state.authorizedUser);

  useEffect(() => {
    const { code } = Object.fromEntries(params.entries());
    if (!code) return;
    option === 'login' ? githubLogin(code) : githubRegistration(code);
  }, [params]);

  return (
    <div className="auth">
      {loading && <Loader />}
      <AuthComponent option={option} />
    </div>
  );
};
