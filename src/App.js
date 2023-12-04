import { GlobalStyle } from "./components/styles/global/Global.styles";
import React from "react";
import { AppRoutes } from "./routes";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#c92222" highlightColor="#444">
        <AppRoutes />
        <GlobalStyle />
      </SkeletonTheme>
    </>
  );
}

export default App;
