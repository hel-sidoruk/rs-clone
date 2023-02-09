import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

export const Popup = () => {
  const [isHidden, setIsHidden] = useState(true);
  const { pathname } = useLocation();
  const { newItems } = useTypedSelector((state) => state.notifications);
  const { removeFromNew } = useActions();

  useEffect(() => {
    pathname.endsWith('/train') ? setIsHidden(true) : setIsHidden(false);
  }, [pathname]);

  const handleClick = () => {
    setIsHidden(true);
    setTimeout(() => {
      removeFromNew(newItems[0].id);
    }, 900);
  };

  return createPortal(
    <div className={`${isHidden ? 'popup' : 'popup popup--active'}`}>
      <div className="popup__header">
        <i className="icon-moon-info icon-moon"></i>
        <span>You have ranked up!</span>
        <button className="close" onClick={handleClick}>
          <i className="icon-moon-x icon-moon"></i>
        </button>
      </div>
      <div className="popup__body">{newItems[0].text}</div>
    </div>,
    document.getElementById('popup-root') as HTMLElement
  );
};
