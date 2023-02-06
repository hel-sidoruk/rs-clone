import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';

export const KataLanguage = () => {
  const [status, setStatus] = useState('');
  const { id } = useParams();
  const { trainedKatas, solvedKatas } = useTypedSelector((state) => state.account);
  useEffect(() => {
    if (id) {
      trainedKatas?.includes(id) && setStatus('trained');
      solvedKatas?.includes(id) && setStatus('solved');
    }
  }, [trainedKatas, solvedKatas]);

  return (
    <div className="kata-language">
      <i className={`icon-moon icon-moon-javascript ${status}`}></i>
      Javascript
    </div>
  );
};
