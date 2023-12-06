/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import UserCard from "../components/userCard";
import Main from "../components/main";

describe("UserCard", () => {
  it("renders userCards without crashing", () => {
    const mainComponent = render(<Main/>)
   const component = render(<UserCard />);

   expect(component).toMatchSnapshot();

  });
});
