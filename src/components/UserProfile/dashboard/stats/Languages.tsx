import React from 'react';
import useTypedSelector from '../../../../hooks/useTypedSelector';

const Languages = () => {
  const { currentUser } = useTypedSelector((state) => state.user);

  return (
    <div className="stats__langs">
      <div className="stats__subtitle">
        <i className="icon-moon-terminal icon-moon colored"></i>
        Languages:
      </div>
      <div>
        <b>Total Languages Trained:</b>51
      </div>
      <div>
        <b>Highest Trained:</b>JavaScript ({currentUser?.rank})
      </div>
      <div>
        <b>Most Recent:</b>Groovy
      </div>
    </div>
  );
};
export default Languages;
