import Tile from "./Tile";

function NextTile({ currentTile, nextTile }) {
  const handleDragStart = (e) => {
    if (!currentTile) return;
    e.dataTransfer.setData("tile", currentTile);
  };

  return (
    <div className="next-queue">
      <p className="panel-label">NEXT</p>
      <div className="next-tiles-row">
        {/* Current tile — draggable */}
        <div
          draggable={!!currentTile}
          onDragStart={handleDragStart}
        >
          <Tile value={currentTile} draggable={!!currentTile} onDragStart={handleDragStart} />
        </div>
        {/* Preview of next-next tile */}
        <Tile value={nextTile} />
      </div>
    </div>
  );
}

export default NextTile;
