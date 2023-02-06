import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SolutionsAPI } from '../../api/SolutionsAPI';
import useTypedSelector from '../../hooks/useTypedSelector';
import { SolutionInterface } from '../../types';
import { CodeHighlight } from '../Solution/CodeHighlight';

export const PastSolutions = () => {
  const { id } = useParams();
  const [solutions, setSolutions] = useState<SolutionInterface[]>([]);
  const { username } = useTypedSelector((state) => state.account);

  useEffect(() => {
    id && username && SolutionsAPI.getSolutions(id, username).then((res) => setSolutions(res));
  }, []);

  return (
    <div className="kata-train__descr">
      {solutions.length &&
        solutions.map(({ solution }) => (
          <div className="markdown past-solutions" key={nanoid()}>
            <CodeHighlight>{solution}</CodeHighlight>
          </div>
        ))}
    </div>
  );
};
