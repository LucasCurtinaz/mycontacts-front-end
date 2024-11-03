import {
  useCallback,
  useEffect, useRef, useState,
} from 'react';

export default function useSafeAsyncState(inititalState) {
  const [state, setState] = useState(inititalState);

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const setSafeAsyncState = useCallback((data) => {
    if (isMounted.current) {
      setState(data);
    }
  }, []);

  return [state, setSafeAsyncState];
}
