import "styled-components";
import { theme } from "../theme";

declare module "styled-components" {
  type CustomTheme = typeof theme;
  export interface DefaultTheme extends CustomTheme {}
}
