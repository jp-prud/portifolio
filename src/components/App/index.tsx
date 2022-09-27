import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../theme/globalStyle";
import theme from "../../theme/theme";
import Layout from "../Layout";

// import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Layout />
    </ThemeProvider>
  );
}
