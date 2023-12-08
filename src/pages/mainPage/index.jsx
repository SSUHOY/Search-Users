import React, { useEffect, useState } from "react";
import {
  Error,
  PaginationBlock,
  ResultsError,
  SearchButton,
  SearchForm,
  SearchInput,
  SearchResults,
  SearchTitle,
} from "./mainPage.styles";
import UserCard from "../../components/userCard";
import { Container } from "../../components/styles/reusable";
import axios from "../../axios";
import { Pagination } from "../../components/pagination";
import { SortByRepos } from "../../components/sorting";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setUsersResults } from "../../store/actions/creators/users";
import { usersSelector } from "../../store/selectors/users";

const Main = ({
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
  const [data, setData] = useState({});
  const [searchError, setSearchError] = useState("");

  const dispatch = useDispatch();

  const users = useSelector(usersSelector);

  const handleQueryInput = (event) => {
    const value = event.target.value;
    if (value) {
      setError("");
      setSearchError("");
    }
    setQuery(value);
  };

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("search/users?q=" + query, {
        params: {
          page: currentPage,
          per_page: 10,
          sort: "repositories",
          order: sortType.sortProperty,
        },
      });
      setData(data);
      if (data?.items?.length === 0) {
        setSearchError("No users found");
      }
      return dispatch(setUsersResults(data?.items)), setError("");
    } catch (error) {
      if (error.message === "Request failed with status code 422") {
        setError("Enter a valid text");
        dispatch(setUsersResults([]));
      }
      if (error.message === "Request failed with status code 403") {
        setError(
          "GitHub API request limit exceeded: 10 request per minute, reload page or wait a minute to resume"
        );
        dispatch(setUsersResults([]));
      }
    }
  };

  const handleSearchUsers = async (e) => {
    e.preventDefault();
    if (query) {
      await fetchUsers();
      setPaginationVisible(true);
      setCurrentPage(1);
    } else if (query === "") {
      setError("Enter a valid text");
      dispatch(setUsersResults([]));
    } else if (!error) {
      setError("");
    }
  };

  useEffect(() => {
    const displayUsersOnChange = async () => {
      if (query) {
        await fetchUsers();
      }
    };
    displayUsersOnChange();
  }, [currentPage, sortType]);

  return (
    <Container>
      <SearchForm>
        <SearchTitle>GitHub Search Users</SearchTitle>
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
          <Pagination
            onChangePage={(number) => setCurrentPage(number)}
            currentPage={currentPage}
            data={data.total_count}
          />
        </PaginationBlock>
      )}
      <SkeletonTheme baseColor="#161B22" highlightColor="#444" height="120px">
        <SearchResults>
          {users?.map((user, index) => (
            <UserCard key={index} user={user} currentPage={currentPage} />
          ))}
        </SearchResults>
        {users.length === 0 ? <ResultsError>{searchError}</ResultsError> : ""}
      </SkeletonTheme>
    </Container>
  );
};

export default Main;
