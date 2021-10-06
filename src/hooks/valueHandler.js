import { useEffect } from 'react';

export const useValueHandler = (index, id, value, formSet, handleChange) => {
  useEffect(() => {
    handleChange(index, id, value, formSet);

    // eslint-disable-next-line
  }, [value]);
};
