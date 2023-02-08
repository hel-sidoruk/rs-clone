import { useState, useEffect } from 'react';
import { KataAPI } from '../api';
import { KataInterface } from '../types/kata';
import useTypedSelector from './useTypedSelector';

export function useFetchKata(id: string): [KataInterface | null] {
  const { katasByID } = useTypedSelector((state) => state.katas);
  const [kata, setKata] = useState<KataInterface | null>(null);

  useEffect(() => {
    if (id && katasByID) {
      if (katasByID[id]) setKata(katasByID[id]);
      else KataAPI.getOne(id).then((kata) => setKata(kata));
    }
  }, [id, katasByID]);

  return [kata];
}
