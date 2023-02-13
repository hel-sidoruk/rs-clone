import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UsersAPI } from '../../../../api';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import { initialUser } from '../../../../pages';
import Breakdown from '../breakdown/Breakdown';
import Contributions from './Contributions';
import Progress from './Progress';

const Indicators = () => {
  const [user, setUser] = useState(initialUser);
  const { id } = useParams();
  const { username } = useTypedSelector((state) => state.authorizedUser);
  const isAuth = user.username === username;

  useEffect(() => {
    UsersAPI.getOne(id as string).then((data) => setUser(data));
  }, []);

  return (
    <div className="stats__indicators">
      <Progress user={user} />
      {isAuth && <Breakdown />}
      <Contributions />
    </div>
  );
};
export default Indicators;
