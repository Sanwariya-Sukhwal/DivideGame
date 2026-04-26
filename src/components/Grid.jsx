import Tile from "./Tile";
import { generateTile } from "../utils/generateTile";
import { mergeTiles } from "../utils/mergeLogic";

function Grid({ grid, setGrid, currentTile, setCurrentTile, updateScore, nextTile, setNextTile }) {
  const handleDrop = (e, index) => {
    e.preventDefault();
    const tileValue = Number(e.dataTransfer.getData("tile"));
    if (!tileValue || grid[index] !== null) return;

    let newGrid = [...grid];
    newGrid[index] = tileValue;

    const result = mergeTiles(newGrid, index);
    setGrid(result.newGrid);
    updateScore(result.gainedScore || 0);

    // shift queue: current becomes nextTile, generate new nextTile
    setCurrentTile(nextTile);
    setNextTile(generateTile());
  };

  const allowDrop = (e) => e.preventDefault();

  return (
    <div className="grid">
      {grid.map((value, index) => (
        <div
          key={index}
          className="grid-cell"
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={allowDrop}
        >
          <Tile value={value} />
        </div>
      ))}
    </div>
  );
}

export default Grid;
