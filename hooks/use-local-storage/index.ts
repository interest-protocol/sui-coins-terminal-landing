import { useEffect, useState } from 'react';

export const useLocalStorage = <T = unknown>(
  key: string,
  defaultValue: T
): [T, (data: T) => void] => {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    const local = window.localStorage.getItem(key);

    if (local) setValue(JSON.parse(local) as T);
  }, []);

  const setLocalStorage = (data: T) => {
    setValue(data);
    window.localStorage.setItem(key, JSON.stringify(data));
  };

  return [value, setLocalStorage];
};
