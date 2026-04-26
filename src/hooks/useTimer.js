import { useState, useEffect, useRef } from "react";

function useTimer(initialSeconds = 180, onExpire) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          clearInterval(intervalRef.current);
          if (onExpire) onExpire();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [paused, onExpire]);

  const reset = () => {
    clearInterval(intervalRef.current);
    setSeconds(initialSeconds);
    setPaused(false);
  };

  const togglePause = () => setPaused((p) => !p);

  const format = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  return { seconds, display: format(seconds), paused, togglePause, reset };
}

export default useTimer;
