import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SolutionsAPI } from '../../api/SolutionsAPI';
import { SolutionInterface } from '../../types';
import { CodeHighlight } from '../Solution/CodeHighlight';

export const PastSolutions = () => {
  const { id } = useParams();
  const [solutions, setSolutions] = useState<SolutionInterface[]>([]);

  useEffect(() => {
    id && SolutionsAPI.getSolutions(id).then((res) => setSolutions(res));
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
