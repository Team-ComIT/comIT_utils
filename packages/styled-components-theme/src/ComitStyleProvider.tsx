import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

export const ComitStyleProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

declare module "styled-components" {
  type CustomTheme = typeof theme;
  export interface DefaultTheme extends CustomTheme {}
}
