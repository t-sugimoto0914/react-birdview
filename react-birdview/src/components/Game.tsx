import React, { FC } from "react";
import { IColor } from "../domain/entity";
import Board from "./Board";
import useTimer from '../hooks/use-timer'
import useGame from '../hooks/use-game'

const Game: FC<{ limit: number }> = ({ limit }) => {
  const [inProgress, score, squares, handleClick, startGame, resetGame] = useGame(limit);
  const [timeLeft, resetTimer] = useTimer(limit, inProgress);
  const tapSquare = (color: IColor) => handleClick(color)
  const reset = () => {
    resetTimer()
    resetGame()
  }
  return (
    <div className="game">
      {inProgress && timeLeft > 0 &&
        <div className="game-board">
          <div>Score:{score}</div>
          <div>Left:{timeLeft}</div>
          <Board squares={squares} onClick={tapSquare} /><br></br>
        </div>
      }
      {timeLeft === 0 &&
        <div>
          <div>Game Over!</div>
          <div>Score:{score}</div>
        </div>
      }
      <div>
        {!inProgress ? <button onClick={startGame}>Start</button> : <button onClick={reset}>restart</button>}
      </div>
    </div>
  );
};

export default Game;