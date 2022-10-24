import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export const ComitStyleProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
