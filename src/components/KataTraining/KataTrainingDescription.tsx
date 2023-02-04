import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { KataAPI } from '../../api';
import { KataInterface } from '../../types/kata';
import { KataInfo } from '../Kata/KataInfo';
import { KataLanguage } from '../Kata/KataLanguage';

export const KataTrainingDescription = ({ handler }: { handler: () => void }) => {
  const [kata, setKata] = useState<KataInterface | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) KataAPI.getOne(id).then(setKata);
  }, []);

  return (
    <div className="kata-description">
      {kata && (
        <>
          <KataInfo data={kata} />
          <KataLanguage status="solved" />
          <div className="controls">
            <div title="Maximize editor space" onClick={handler}>
              <div className="icon-container">
                <i className="icon-moon icon-moon-expand "></i>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
