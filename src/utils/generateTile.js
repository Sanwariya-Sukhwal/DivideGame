export function generateTile() {
  const numbers = [2, 3, 4, 6, 8, 9, 12];
  const randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
}