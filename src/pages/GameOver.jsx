import catImg from "../assets/Cat.png";
import eklavyaLogo from "../assets/eklavya.png";

function GameOver({ score, bestScore, onRestart }) {
  return (
    <div className="game-wrapper">
      <div className="game-over">
        <img src={catImg} alt="cat" style={{ width: 120, marginBottom: 8 }} />
        <h1>Game Over! 😢</h1>
        <h2>Your Score: {score}</h2>
        <h2 style={{ fontSize: 18, color: "#555" }}>Best: {bestScore}</h2>
        <button className="restart-btn" onClick={onRestart}>Play Again 🎮</button>
        <img src={eklavyaLogo} alt="eklavya" className="eklavya-logo" />
      </div>
    </div>
  );
}

export default GameOver;
