import { ThemeProvider, Global } from "@emotion/react";
import { theme } from "./theme";
import { PropsWithChildren } from "react";
import { globalStyle } from "./GlobalStyle";
const ComitStyleProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      {children}
    </ThemeProvider>
  );
};

declare module "@emotion/react" {
  type CustomTheme = typeof theme;
  export interface Theme extends CustomTheme {}
}

export default ComitStyleProvider;
