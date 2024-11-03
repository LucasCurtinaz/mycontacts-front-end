import { useCallback, useState } from 'react';
import useIsMounted from './useIsMounted';

export default function useSafeAsyncState(inititalState) {
  const [state, setState] = useState(inititalState);

  const isMounted = useIsMounted();

  const setSafeAsyncState = useCallback((data) => {
    if (isMounted()) {
      setState(data);
    }
  }, [isMounted]);

  return [state, setSafeAsyncState];
}
