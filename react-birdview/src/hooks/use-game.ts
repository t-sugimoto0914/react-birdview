import { useEffect, useState, useCallback } from 'react'
import { Squares, IColor } from "../domain/entity";

const useGame = (limit: number): [boolean, number, Squares, (color: IColor) => void, () => void, () => void] => {
  const [squares, setSquares] = useState<Squares>(
    Array<IColor>(9).fill('')
  );
  const [inProgress, setInProgress] = useState(false)
  const [currentAnswer, setCurrentAnswer] = useState<IColor>('')
  const [score, setScore] = useState(0)
  const startGame = () => setInProgress(true)
  const resetGame = () => {
    setScore(0)
    setInProgress(false)
  }
  const handleClick = (color: IColor) => {
    if(color === currentAnswer) {
      setScore(() => score + 100)
    }
  };
  useEffect(() => {
    const colors: Squares = ['red', 'green']
    let isRedCnt = 0
    const newColors = Array<IColor>(9).fill('red').map(() => {
      const random = Math.round( Math.random() * 1 );
      if(!random) {
        isRedCnt++
      }
      let color:IColor = colors[random]
      return color
    })
    if (isRedCnt >= 5) {
      setCurrentAnswer('red')
    } else {
      setCurrentAnswer('green')
    }
    setSquares(newColors)
  }, [score])
  return [inProgress, score, squares, handleClick, startGame, resetGame]
}

export default useGame;