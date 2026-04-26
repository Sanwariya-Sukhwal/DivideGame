import Tile from "./Tile";

function KeepSlot({ keepTile, currentTile, setKeepTile, setCurrentTile }) {
  const handleKeep = () => {
    if (currentTile === null) return;
    if (keepTile === null) {
      setKeepTile(currentTile);
      setCurrentTile(null);
    } else {
      const temp = keepTile;
      setKeepTile(currentTile);
      setCurrentTile(temp);
    }
  };

  return (
    <div className="keep-slot" onClick={handleKeep} title="Click to keep/swap tile">
      <Tile value={keepTile} />
      <p className="panel-label">KEEP</p>
    </div>
  );
}

export default KeepSlot;
