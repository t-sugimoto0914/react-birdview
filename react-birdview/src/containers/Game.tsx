import React, { FC } from "react";
import { IColor } from "../domain/entity";
import useTimer from '../hooks/use-timer'
import useGame from '../hooks/use-game'
import Game from '../components/Game'
const EnhancedGame: FC<{ limit: number }> = ({ limit }) => {
  const [inProgress, score, squares, handleClick, startGame, resetGame] = useGame(limit);
  const [timeLeft, resetTimer] = useTimer(limit, inProgress);
  const tapSquare = (color: IColor) => handleClick(color)
  const reset = () => {
    resetTimer()
    resetGame()
  }
  return <Game
    timeLeft={timeLeft}
    inProgress={inProgress}
    score={score}
    squares={squares}
    startGame={startGame}
    reset={reset}
    tapSquare={tapSquare}
    />
};

export default EnhancedGame