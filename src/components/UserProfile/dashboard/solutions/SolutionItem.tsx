import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { KataAPI } from '../../../../api';
import { SolutionInterface } from '../../../../types';
import { KataInterface } from '../../../../types/kata';
import { getDateString } from '../../../../utils';
import { Rank } from '../../../Kata/Rank';
import { CodeHighlight } from '../../../Solution/CodeHighlight';

const SolutionItem = ({ solution }: { solution: SolutionInterface }) => {
  const [kata, setKata] = useState<KataInterface | null>(null);

  useEffect(() => {
    KataAPI.getOne(solution.kataId).then((res) => setKata(res));
  }, []);

  return (
    <div className="solutions-one">
      <div className="solutions-one__header">
        <Rank rank={kata?.rank || '0'}></Rank>
        <Link to={`/kata/${kata?.id}`} className="solutions-one__name">
          {kata?.name}
        </Link>
      </div>
      <div className="solutions-one__lang">JavaScript:</div>
      <div className="solutions-one__code">
        <CodeHighlight>{solution.solution}</CodeHighlight>
      </div>
      <div className="solutions-one__footer">
        <div className="solutions-one__time">{getDateString(solution.createdAt)}</div>
        <Link to={`/kata/${kata?.id}/train`} className="solutions-one__link">
          Refactor
        </Link>
        <Link to={`/kata/${kata?.id}/discuss`} className="solutions-one__link">
          Discuss
        </Link>
      </div>
    </div>
  );
};

export default SolutionItem;
