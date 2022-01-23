import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";

import GlobalStyle from "./styles/Global";

import { RouterDom } from "./router";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <GlobalStyle />
        <Header />
        <RouterDom />
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
