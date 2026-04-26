import { getTileColor } from "../utils/getTileColor";

function Tile({ value, draggable = false, onDragStart }) {
  const colorClass = getTileColor(value);

  return (
    <div
      className={`tile ${colorClass}`}
      draggable={draggable && !!value}
      onDragStart={onDragStart}
    >
      {value ?? ""}
    </div>
  );
}

export default Tile;
