import { useState } from 'react'
import GlobalStyle from "./styles/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme"

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      </ThemeProvider>

    </>
  );
}

export default App
