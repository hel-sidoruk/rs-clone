import React from 'react';
import { Link } from 'react-router-dom';

export const SignUpSuggest = () => {
  return (
    <div className="auth__registration-link">
      <Link className="underline" to="/registration">
        Sign up
      </Link>
      <span>if you don&apos;t have an account yet.</span>
    </div>
  );
};
