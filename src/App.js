import { GlobalStyle } from "./components/styles/global/Global.styles";
import React from "react";
import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
    </>
  );
}

export default App;
