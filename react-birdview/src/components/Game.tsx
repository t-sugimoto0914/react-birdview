import React, { FC } from "react";
import { IGameProps, IColor } from "../domain/entity";
import Board from "./Board";
const Game: FC<IGameProps> = ({ 
  timeLeft = 0,
  inProgress = false,
  score = 0,
  squares = Array<IColor>(9).fill(''),
  startGame = () => undefined,
  reset = () => undefined,
  tapSquare = () => undefined,
 }) => {
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