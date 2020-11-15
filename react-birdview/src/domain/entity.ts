export type Squares = IColor[];
export type IColor = "red" | "green"|'';
export type IBoard = {
  squares: IColor[];
  onClick: (color: IColor) => void;
}
export type ISquare = {
  value: IColor;
  onClick: () => void;
}
export type IGameProps = {
  timeLeft: number,
  inProgress: boolean,
  score: number,
  squares: Squares,
  startGame?: () => void,
  reset?: () => void,
  tapSquare?: (color:IColor) => void,
}