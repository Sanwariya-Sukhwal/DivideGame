export function getLevelFromScore(score) {
  if (score < 50)  return 1;
  if (score < 150) return 2;
  if (score < 300) return 3;
  if (score < 500) return 4;
  if (score < 750) return 5;
  return Math.floor(score / 150) + 1;
}
