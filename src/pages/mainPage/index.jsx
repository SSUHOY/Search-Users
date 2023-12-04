import React, { useEffect, useState } from "react";
import {
  Error,
  PaginationBlock,
  SearchButton,
  SearchForm,
  SearchInput,
  SearchResults,
  SearchTitle,
} from "./mainPage.styles";
import UserCard from "../../components/searchUsers";
import { Container } from "../../components/styles/reusable";
import axios from "../../axios";
import { Pagination } from "../../components/pagination";
import { SortByRepos } from "../../components/sorting";
import "react-loading-skeleton/dist/skeleton.css";

const Main = ({
  users,
  setUsers,
  paginationVisible,
  setPaginationVisible,
  query,
  setQuery,
  currentPage,
  setCurrentPage,
  sortType,
  setSortType,
}) => {
  const [error, setError] = useState("");

  const handleQueryInput = (event) => {
    const value = event.target.value;
    if (value) {
      setError("");
    }
    setQuery(value);
  };

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "search/users?q=" +
          query +
          `&page=${currentPage}` +
          "&per_page=10" +
          "&sort=repositories" +
          `&order=${sortType.sortProperty}`
      );
      console.log(data);
      return setUsers(data?.items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchUsers = async (e) => {
    e.preventDefault();
    if (query) {
      await fetchUsers();
      setPaginationVisible(true);
    } else {
      setError("please enter a text to search");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage, sortType]);

  return (
    <Container>
      <SearchForm>
        <SearchTitle>GitHub Search User</SearchTitle>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <SearchInput
            type="text"
            placeholder="Search users by login on GitHub"
            value={query}
            onChange={handleQueryInput}
          />
          <Error>{error}</Error>
          <SearchButton onClick={handleSearchUsers}>Search</SearchButton>
        </form>
      </SearchForm>

      {users.length !== 0 && paginationVisible && (
        <PaginationBlock>
          <SortByRepos sortType={sortType} setSortType={setSortType} />
          <Pagination onChangePage={(number) => setCurrentPage(number)} />
        </PaginationBlock>
      )}

      <SearchResults>
        {users?.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </SearchResults>
    </Container>
  );
};

export default Main;
