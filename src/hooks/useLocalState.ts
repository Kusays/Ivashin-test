import { useEffect, useState } from 'react';

export const useLocalState = <T>(key: string, initialState: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const list = localStorage.getItem(key);

    if (list) {
      setState(JSON.parse(list));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
