import React from "react";
import {
  SearchButton,
  SearchForm,
  SearchInput,
  SearchResults,
  SearchTitle,
} from "./mainPage.styles";
import UserCard from "../../components/searchUsers";
import { Container } from "../../components/styles/reusable";

const Main = () => {
  return (
    <Container>
      <SearchForm>
        <SearchTitle>GitHub Search User</SearchTitle>
        <form>
          <SearchInput type="text" placeholder="type any text" />
          <SearchButton>Search</SearchButton>
        </form>
      </SearchForm>
      <SearchResults>
        <UserCard />
      </SearchResults>
    </Container>
  );
};

export default Main;
