import "./App.css";
import { GlobalStyle } from "./components/styles/global/Global.styles";
import Main from "./pages/mainPage";
import React from "react";

function App() {
  return (
    <>
      <Main />
      <GlobalStyle />
    </>
  );
}

export default App;
