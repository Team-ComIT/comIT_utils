type BaseColorKey = "red" | "gray";
type ColorKeySet<
  KeyGroup extends BaseColorKey,
  Light extends number[]
> = `${KeyGroup}${Light[number]}`;

export type ColorKeyType =
  | "white"
  | "black"
  | "primary"
  | "check"
  | "error"
  | ColorKeySet<"red", [50, 100, 200, 300, 400, 500, 600, 700, 800]>
  | ColorKeySet<"gray", [50, 100, 200, 300, 400, 500, 600, 700, 800]>;

export type ColorType = Record<ColorKeyType, string>;
