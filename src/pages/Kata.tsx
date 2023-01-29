import React from 'react';
import { Outlet } from 'react-router-dom';

export const Kata = () => {
  return (
    <div>
      Kata
      <Outlet />
    </div>
  );
};
