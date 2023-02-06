import React, { useEffect, useState } from 'react';
import KataSolutionItem from '../components/Kata/kataSolutionItem';
import LeftBarForSolutions from '../components/Kata/leftBarForSolutions';
import { SolutionsAPI } from '../api/SolutionsAPI';
import { useParams } from 'react-router';
import { SolutionInterface } from '../types';
import { nanoid } from 'nanoid';

const add = [
  {
    href: 'https://www.codewars.com/post/8-reasons-why-codewarriors-practice-coding-with-codewars',
    img: 'https://uploads-ssl.webflow.com/62e95dddfb380a0e61193e7d/6363e7db70db732290fa3db6_logo-256.png',
    title: '8 Reasons Why Codewarriors Practice Coding with Codewars',
    description:
      'Not everyone trains the same. Discover new ways to leverage Codewars in your education and career.',
  },
  {
    href: 'https://www.codewars.com/post/10-traits-employers-look-for-when-hiring-software-engineers',
    img: 'https://uploads-ssl.webflow.com/62e95dddfb380a0e61193e7d/6397a637b0034f276c24d9fe_62f25d9703388a1bef8320f8_62d5c7124ddf80d307192793_AdobeStock_164314960%2520(1)-p-2600%201.png',
    title: '10 Traits Employers Look for When Hiring Software Engineers',
    description:
      'Codewars CEO Jake Hoffner breaks down the 10 traits he looks for in software engineers.',
  },
];

export const KataSolutions = () => {
  const { id } = useParams();
  const [solutions, setSolutions] = useState<SolutionInterface[]>([]);

  useEffect(() => {
    if (id) SolutionsAPI.getSolutions(id).then((res) => setSolutions(res));
  }, []);

  return (
    <>
      <div className="section solution-main">
        <LeftBarForSolutions sol />
      </div>
      <div>
        {solutions.length &&
          solutions.map((item) => <KataSolutionItem solution={item} key={nanoid()} />)}
      </div>
    </div>
  );
};
