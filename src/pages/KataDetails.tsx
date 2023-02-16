import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { KataStats } from '../components/Kata/KataStats';
import { SimilarKatas } from '../components/Kata/SimilarKatas';
import { KataInstructions } from '../components/KataTraining/KataInstructions';
import { KataInterface } from '../types/kata';

export const KataDetails = () => {
  const { kata } = useOutletContext<{ kata: KataInterface }>();
  return (
    <div>
      <div className="section kata-details">
        <h3 className="kata-details__title">Description:</h3>
        {kata && <KataInstructions description={kata.description} tags={kata.tags} />}
      </div>
      <SimilarKatas data={kata} />
      {kata && <KataStats data={kata} />}
    </div>
  );
};
