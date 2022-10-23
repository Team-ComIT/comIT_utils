import type { ColorType } from "./color.type";

const color: ColorType = {
  black: "#000000",
  white: "#FFFFFF",
  check: "#04DF00",
  error: "#DC3035",
  primary: "#006EFF",
  gray50: "#FDFDFD",
  gray100: "#EDEDED",
  gray200: "#D3D3D3",
  gray300: "#BDBDBD",
  gray400: "#A7A7A7",
  gray500: "#929292",
  gray600: "#7C7C7C",
  gray700: "#505050",
  gray800: "#242424",
  red50: "#FFEDEE",
  red100: "#FFC9CB",
  red200: "#FF999C",
  red300: "#ED666A",
  red400: "#E84045",
  red500: "#DC3035",
  red600: "#C32328",
  red700: "#971D20",
  red800: "#4D0002",
} as const;

export default color;
