import React, { useEffect, useState } from 'react';
import KataSolutionItem from '../components/Kata/kataSolutionItem';
import LeftBarForSolutions from '../components/Kata/leftBarForSolutions';
import { SolutionsAPI } from '../api/SolutionsAPI';
import { useParams } from 'react-router';
import { SolutionInterface } from '../types';
import { nanoid } from 'nanoid';
import useTypedSelector from '../hooks/useTypedSelector';
import { LockedSolutions } from '../components/Kata/LockedSolutions';

export const KataSolutions = () => {
  const { id } = useParams();
  const [solutions, setSolutions] = useState<SolutionInterface[]>([]);
  const { solvedKatas, forfeitedKatas } = useTypedSelector((state) => state.account);
  const shouldShowSolutions =
    solvedKatas?.includes(id as string) || forfeitedKatas?.includes(id as string);

  useEffect(() => {
    if (id) SolutionsAPI.getSolutions(id).then((res) => setSolutions(res));
  }, []);

  return (
    <div className="section solution-main">
      <LeftBarForSolutions sol />
      <div>
        {shouldShowSolutions ? (
          solutions.map((item) => <KataSolutionItem solution={item} key={nanoid()} />)
        ) : (
          <LockedSolutions kataId={id as string} />
        )}
      </div>
    </div>
  );
};
