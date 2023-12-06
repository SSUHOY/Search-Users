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

console.log(users)

  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const [searchError, setSearchError] = useState("");

  const dispatch = useDispatch();

  const fetchUsersData = useSelector(usersSelector);

  console.log(fetchUsersData);

  const handleQueryInput = (event) => {
    const value = event.target.value;
    setSearchError("");
    if (value) {
      setError("");
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

      if (data?.items.length === 0) {
        setSearchError("No results found");
        console.log("нет результата");
      }
      dispatch(setUsersResults(data?.items));
      return setUsers(data?.items);
    } catch (error) {
      if(error.message === "Request failed with status code 422") {
        return setSearchError("Enter a valid text");
      }
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
        <ResultsError>{searchError}</ResultsError>
        {users?.length === 0 && searchError === "" ? (
          <ResultsError>Type any text to search github users</ResultsError>
        ) : (
          ""
        )}
      </SkeletonTheme>
    </Container>
  );
};

export default Main;
