import { useState, useEffect } from 'react';
import { KataAPI } from '../api';
import { KataInterface } from '../types/kata';
import useTypedSelector from './useTypedSelector';

export function useFetchKata(id: string): [KataInterface | null, boolean] {
  const { katasByID } = useTypedSelector((state) => state.katas);
  const [kata, setKata] = useState<KataInterface | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id && katasByID) {
      if (katasByID[id]) setKata(katasByID[id]);
      else
        KataAPI.getOne(id).then((kata) => {
          kata ? setKata(kata) : setError(true);
        });
    }
  }, [id, katasByID]);

  return [kata, error];
}
