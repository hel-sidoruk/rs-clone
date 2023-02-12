import React from 'react';
import { UserInterface } from '../../../../types/user';

const Languages = ({ user }: { user: UserInterface }) => {
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
        <b>Highest Trained:</b>JavaScript ({user.rank})
      </div>
      <div>
        <b>Most Recent:</b>Groovy
      </div>
    </div>
  );
};
export default Languages;
