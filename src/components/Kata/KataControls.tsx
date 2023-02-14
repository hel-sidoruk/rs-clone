import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';

const options = ['details', 'solutions', 'discuss'];

export const KataControls = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState('details');
  const { id } = useParams();
  const { comments } = useTypedSelector((state) => state.comments);

  const getClassname = (i: number) => {
    return `controls__btn ${active === options[i] ? 'active' : ''}`;
  };

  useEffect(() => {
    if (pathname.endsWith(options[1])) setActive(options[1]);
    else if (pathname.endsWith(options[2])) setActive(options[2]);
    else setActive(options[0]);
  }, [pathname]);

  return (
    <div className="controls">
      <Link to={`/kata/${id}/`} className={getClassname(0)}>
        Details
      </Link>
      <Link to={`/kata/${id}/solutions`} className={getClassname(1)}>
        <i className="icon-moon-bullseye icon-moon"></i>
        Solutions
      </Link>
      <Link to={`/kata/${id}/discuss`} className={getClassname(2)}>
        <i className="icon-moon-comments icon-moon"></i>
        Discourse ({comments.length})
      </Link>
    </div>
  );
};
