import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import "./globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./internship.css";
import "./free_resource.css";
import "./offer-guarantee.css";
import theme from "@/utils/theme";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function InternshipLayout({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

// import type { AppProps } from "next/app";
// import "./globals.css";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
