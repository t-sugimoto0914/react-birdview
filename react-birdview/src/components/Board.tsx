
import React from "react";
import Square from "./Square";
import { IBoard } from "../domain/entity";

const Board: React.FC<IBoard> = ({ squares, onClick }) => {
  return (
    <div className="board">
      {Array<number>(9)
        .fill(0)
        .map((_, i) => (
          <Square key={i} value={squares[i]} onClick={() => onClick(squares[i])} />
        ))}
    </div>
  );
};

export default Board;