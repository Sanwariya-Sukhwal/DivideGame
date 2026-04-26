import { useState } from "react";

function useScore() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    Number(localStorage.getItem("bestScore")) || 0
  );

  const updateScore = (points) => {
    const newScore = score + points;
    setScore(newScore);

    if (newScore > bestScore) {
      setBestScore(newScore);
      localStorage.setItem("bestScore", newScore);
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  return { score, bestScore, updateScore, resetScore };
}

export default useScore;