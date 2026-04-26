// Maps tile values to color classes matching reference design
const colorMap = {
  2:  "blue",
  3:  "green",
  4:  "yellow",
  6:  "yellow",
  8:  "orange",
  9:  "pink",
  12: "green",
  24: "blue",
  36: "purple",
  32: "red",
  35: "purple",
  48: "blue",
  72: "purple",
};

export function getTileColor(value) {
  if (!value) return "empty";
  if (colorMap[value]) return colorMap[value];
  // fallback pattern for larger merged values
  const colors = ["orange", "yellow", "purple", "red", "green", "blue", "pink"];
  return colors[value % colors.length];
}
