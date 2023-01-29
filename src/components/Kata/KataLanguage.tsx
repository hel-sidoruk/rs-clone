import React from 'react';

export const KataLanguage = ({ status }: { status?: 'solved' | 'trained' }) => {
  return (
    <div className="kata-language">
      <i className={`icon-moon icon-moon-javascript ${status ? status : ''}`}></i>
      Javascript
    </div>
  );
};
