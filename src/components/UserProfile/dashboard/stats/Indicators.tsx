import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UsersAPI } from '../../../../api';
import { initialUser } from '../../../../pages';
import Contributions from './Contributions';
import Progress from './Progress';

const Indicators = () => {
  const [user, setUser] = useState(initialUser);
  const { id } = useParams();

  useEffect(() => {
    UsersAPI.getOne(id as string).then((data) => setUser(data));
  }, []);

  return (
    <div className="stats__indicators">
      <Progress user={user} />
      <Contributions />
    </div>
  );
};
export default Indicators;
