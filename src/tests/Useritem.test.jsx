/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import RepoItem from "../pages/userPage/repo";
import UserCard from "../components/userCard";


// Mock data for testing
const dataRepos = {
  name: "Repository Name",
  language: "JavaScript",
  description: "This repository is awesome",
};

const userData = {
  login: "Name",
  id: 1,
  avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
};

describe("ReposList", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<RepoItem repo={dataRepos} />);
  });
  it("Renders repo item", () => {
    console.log(wrapper.debug());
    expect(wrapper).not.toBeNull();
  });
  it("Renders user card snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  })
});

describe("UserCard", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<UserCard user={userData} />);
  });
  it("Renders userCard item", () => {
    console.log(wrapper.debug());
    expect(wrapper).not.toBeNull();
  });
});
