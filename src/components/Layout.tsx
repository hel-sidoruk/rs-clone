import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useActions from '../hooks/useActions';
import { Footer } from './Footer';
import { Header } from './Header';
import { HeaderHome } from './Home/HeaderHome';
import { Sidebar } from './Sidebar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const { fetchKatas, checkUser } = useActions();

  useEffect(() => {
    checkUser();
    fetchKatas();
  }, []);

  if (pathname === '/login' || pathname === '/registration') return <>{children}</>;
  return (
    <>
      {pathname === '/' ? (
        <HeaderHome />
      ) : (
        <>
          <Sidebar />
          <Header />
        </>
      )}
      {children}
      <Footer />
    </>
  );
};
