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
