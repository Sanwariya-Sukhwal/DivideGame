import { useState, useCallback } from "react";
import Grid from "../components/Grid";
import NextTile from "../components/NextTile";
import GameOver from "./GameOver";
import KeepSlot from "../components/KeepSlot";
import Trash from "../components/Trash";

import { generateTile } from "../utils/generateTile";
import { checkGameOver } from "../utils/checkGameOver";
import { getLevelFromScore } from "../utils/getLevelFromScore";
import useScore from "../hooks/useScore";
import useTimer from "../hooks/useTimer";

import catImg from "../assets/Cat.png";
import eklavyaLogo from "../assets/eklavya.png";

// Static decorative bubbles
const BUBBLES = [
  { size: 90,  top: "6%",  left: "4%"  },
  { size: 22,  top: "10%", left: "11%" },
  { size: 16,  top: "18%", left: "8%"  },
  { size: 70,  top: "62%", left: "3%"  },
  { size: 55,  top: "72%", left: "12%" },
  { size: 12,  top: "55%", left: "9%"  },
  { size: 65,  top: "85%", left: "30%" },
  { size: 80,  top: "88%", left: "40%" },
  { size: 100, top: "5%",  right: "6%" },
  { size: 28,  top: "14%", right: "14%"},
  { size: 18,  top: "22%", right: "10%"},
  { size: 75,  top: "48%", right: "2%" },
  { size: 55,  top: "60%", right: "9%" },
  { size: 20,  top: "55%", right: "16%"},
  { size: 90,  top: "72%", right: "3%" },
  { size: 16,  top: "68%", right: "14%"},
];

function HelpModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>How to Play 🐱</h2>
        <ul>
          <li>Drag the <b>Next</b> tile onto any empty grid cell.</li>
          <li>Adjacent tiles that <b>share a factor</b> automatically divide — the larger splits by the smaller.</li>
          <li><b>Equal</b> adjacent tiles cancel each other out.</li>
          <li>Use <b>KEEP</b> to save a tile for later (click to swap back).</li>
          <li>Use <b>TRASH</b> to discard the current tile (10 uses).</li>
          <li>The game ends when the grid is full with no valid moves left.</li>
        </ul>
        <button className="modal-close" onClick={onClose}>Got it!</button>
      </div>
    </div>
  );
}

function PauseModal({ onResume }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Paused ⏸</h2>
        <p style={{ textAlign: "center", marginBottom: 8 }}>Take a breather!</p>
        <button className="modal-close" onClick={onResume}>Resume ▶</button>
      </div>
    </div>
  );
}

function Game() {
  const [grid, setGrid] = useState(Array(16).fill(null));
  const [currentTile, setCurrentTile] = useState(generateTile());
  const [nextTile, setNextTile] = useState(generateTile());
  const [keepTile, setKeepTile] = useState(null);
  const [trashCount, setTrashCount] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showPause, setShowPause] = useState(false);

  const { score, bestScore, updateScore, resetScore } = useScore();

  const handleExpire = useCallback(() => setGameOver(true), []);
  const { display: timerDisplay, paused, togglePause, reset: resetTimer } = useTimer(180, handleExpire);

  const level = getLevelFromScore(score);

  const handleUpdateGrid = (newGrid) => {
    setGrid(newGrid);
    if (checkGameOver(newGrid)) setGameOver(true);
  };

  const restartGame = () => {
    setGrid(Array(16).fill(null));
    setCurrentTile(generateTile());
    setNextTile(generateTile());
    setKeepTile(null);
    setTrashCount(10);
    setGameOver(false);
    resetScore();
    resetTimer();
  };

  const handlePause = () => {
    togglePause();
    setShowPause((p) => !p);
  };

  const handleResume = () => {
    togglePause();
    setShowPause(false);
  };

  if (gameOver) {
    return <GameOver score={score} bestScore={bestScore} onRestart={restartGame} />;
  }

  return (
    <>
      {/* Decorative bubbles */}
      {BUBBLES.map((b, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            width: b.size, height: b.size,
            top: b.top, left: b.left, right: b.right,
          }}
        />
      ))}

      <div className="game-wrapper">
        {/* TOP BAR */}
        <div className="top-bar">
          <button className="icon-btn pause" onClick={handlePause} title="Pause">⏸</button>
          <h1 className="game-title">JUST DIVIDE</h1>
          <button className="icon-btn help" onClick={() => setShowHelp(true)} title="Help">?</button>
        </div>

        {/* TIMER */}
        <div className="timer-row">
          <span>⏳</span>
          <span>{timerDisplay}</span>
        </div>

        {/* INSTRUCTION */}
        <div className="instruction">
          <span className="dot" />
          DIVIDE WITH THE NUMBERS TO SOLVE THE ROWS AND COLUMNS.
        </div>

        {/* GAME AREA */}
        <div className="game-area">
          {/* BOARD */}
          <div className="board-wrapper">
            <img src={catImg} alt="cat" className="cat-image" />
            <div className="board-header">
              <span className="badge">LEVEL {level}</span>
              <span className="badge">SCORE {score}</span>
            </div>
            <Grid
              grid={grid}
              setGrid={handleUpdateGrid}
              currentTile={currentTile}
              setCurrentTile={setCurrentTile}
              updateScore={updateScore}
              nextTile={nextTile}
              setNextTile={setNextTile}
            />
          </div>

          {/* SIDE PANEL */}
          <div className="side-panel">
            <KeepSlot
              keepTile={keepTile}
              currentTile={currentTile}
              setKeepTile={setKeepTile}
              setCurrentTile={setCurrentTile}
            />

            <NextTile currentTile={currentTile} nextTile={nextTile} />

            <Trash
              trashCount={trashCount}
              setTrashCount={setTrashCount}
              setCurrentTile={setCurrentTile}
              setNextTile={setNextTile}
            />
          </div>
        </div>

        <img src={eklavyaLogo} alt="eklavya" className="eklavya-logo" />
      </div>

      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
      {showPause && <PauseModal onResume={handleResume} />}
    </>
  );
}

export default Game;
