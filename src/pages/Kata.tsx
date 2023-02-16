import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { KataControls } from '../components/Kata/KataControls';
import { KataDescription } from '../components/Kata/KataDescription';
import useActions from '../hooks/useActions';
import { useFetchKata } from '../hooks/useFetchKata';

export const Kata = () => {
  const { id } = useParams();

  const [kata] = useFetchKata(id as string);
  const { fetchComments } = useActions();

  useEffect(() => {
    if (id) fetchComments(id);
  }, [id]);

  useEffect(() => {
    if (kata) document.title = `${kata.name} | Codewars Clone`;
  }, [kata]);

  return (
    <main className="play-view">
      <h1 className="page-title">Kata</h1>
      {kata && <KataDescription kata={kata} />}
      <KataControls />
      <Outlet context={{ kata }} />
    </main>
  );
};
