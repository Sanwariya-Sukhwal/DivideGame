export function mergeTiles(grid, index) {
  const newGrid = [...grid];
  const current = newGrid[index];
  let gainedScore = 0;

  const neighbors = [index - 4, index + 4, index - 1, index + 1];

  neighbors.forEach((n) => {
    if (n < 0 || n >= 16) return;

    const neighborValue = newGrid[n];
    if (neighborValue === null) return;

    // SAME NUMBER
    if (neighborValue === current) {
      gainedScore += current;
      newGrid[index] = null;
      newGrid[n] = null;
    }

    // DIVISION
    else if (current % neighborValue === 0) {
      const result = current / neighborValue;

      if (result === 1) {
        newGrid[index] = null;
        newGrid[n] = null;
      } else {
        gainedScore += result;
        newGrid[index] = result;
        newGrid[n] = null;
      }
    }

    else if (neighborValue % current === 0) {
      const result = neighborValue / current;

      if (result === 1) {
        newGrid[index] = null;
        newGrid[n] = null;
      } else {
        gainedScore += result;
        newGrid[index] = result;
        newGrid[n] = null;
      }
    }
  });

  return { newGrid, gainedScore };
}