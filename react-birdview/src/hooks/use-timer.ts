import { useEffect, useState, useCallback } from 'react'

const useTimer = (limit: number, inProgress: boolean): [number, () => void] => {
  const [timeLeft, setTimeLeft] = useState(limit)
  const resetTimer = useCallback(() => setTimeLeft(limit), [limit]);
  useEffect(() => {
    if (!timeLeft || !inProgress) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft, inProgress]);

  return [timeLeft, resetTimer]
}

export default useTimer;