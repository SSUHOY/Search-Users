import React from "react";

import { SearchTitle } from "../mainPage/mainPage.styles";
import { Container404, ErrorCode, ToMainButton } from "./notFound.styles";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Container404>
      <ErrorCode>404</ErrorCode>
      <SearchTitle>Oops..Page not found</SearchTitle>
      <Link to="/">
        <ToMainButton>Back to main</ToMainButton>
      </Link>
    </Container404>
  );
};
