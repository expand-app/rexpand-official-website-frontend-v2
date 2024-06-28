import { ThemeProvider } from "@mui/material/styles";
import { Metadata } from "next";
import theme from "@/utils/theme";
import { Html, Head, Main, NextScript } from "next/document";

export const metadata: Metadata = {
  title: "Rexpand",
  description: "Rexpand official website",
};

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>

        <NextScript />
      </body>
    </Html>
  );
}
