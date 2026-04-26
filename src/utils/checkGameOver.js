export function checkGameOver(grid) {
  // ❌ If any empty cell → NOT game over
  if (grid.includes(null)) return false;

  // check possible merges
  for (let i = 0; i < 16; i++) {
    const current = grid[i];

    const neighbors = [i - 4, i + 4, i - 1, i + 1];

    for (let n of neighbors) {
      if (n < 0 || n >= 16) continue;

      const neighbor = grid[n];

      // same number
      if (neighbor === current) return false;

      // division possible
      if (current % neighbor === 0 || neighbor % current === 0) {
        return false;
      }
    }
  }

  // no moves left
  return true;
}