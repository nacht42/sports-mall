import React from "react";
import NextApp from "next/app";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { theme } from "../theme/theme";
import "pure-react-carousel/dist/react-carousel.es.css";

class App extends NextApp {
  render() {
    const { Component } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <ColorModeProvider>
          <Component />
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
