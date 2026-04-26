import { generateTile } from "../utils/generateTile";

const MAX_TRASH = 10;

function Trash({ trashCount, setTrashCount, setCurrentTile, setNextTile }) {
  const handleTrash = () => {
    if (trashCount <= 0) return;
    setCurrentTile(generateTile());
    setTrashCount((c) => c - 1);
  };

  return (
    <div className={`trash-btn ${trashCount <= 0 ? "disabled" : ""}`} onClick={handleTrash}>
      <p className="panel-label">TRASH</p>
      <div className="trash-icon">
        🗑
        <span className="trash-count">x{trashCount}</span>
      </div>
    </div>
  );
}

export default Trash;
