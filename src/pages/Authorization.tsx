import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AccountAPI } from '../api/AccountAPI';
import { AuthComponent } from '../components/Authorization/AuthComponent';
import { AuthForm } from '../components/Authorization/AuthForm';

export const Authorization = ({ option }: { option: 'login' | 'registration' }) => {
  const [params] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { code } = Object.fromEntries(params.entries());
    if (!code) return;
    setIsLoading(true);
    async function fn() {
      if (option === 'login') {
        const res = await AccountAPI.githubLogin(code);
        console.log(res);
      } else {
        const res = await AccountAPI.githubRegistration(code);
        console.log(res);
      }
      setIsLoading(false);
    }
    fn();
    navigate('/');
  }, [params]);

  const handleClick = async () => {
    const data = await AccountAPI.check();
    console.log(data);
  };

  return (
    <div className="auth">
      {isLoading ? (
        <h1 style={{ color: '#fff', marginTop: '25px' }}>Loading...</h1>
      ) : (
        <AuthComponent option={option} />
      )}
      <button className="btn" onClick={handleClick}>
        Check auth
      </button>
    </div>
  );
};
