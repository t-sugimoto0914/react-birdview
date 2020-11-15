import React from "react";
import { ISquare } from "../domain/entity";

const Square: React.FC<ISquare> = ({ value, onClick }) => {
  return (
    <button className={'square '+ value} onClick={onClick}>
    </button>
  );
};

export default Square;