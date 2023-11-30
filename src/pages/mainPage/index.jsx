import React, { useState } from "react";
import {
  SearchButton,
  SearchForm,
  SearchInput,
  SearchResults,
  SearchTitle,
} from "./mainPage.styles";
import UserCard from "../../components/searchUsers";
import { Container } from "../../components/styles/reusable";
import axios from "../../axios";

const Main = () => {
  const [query, setQuery] = useState("");
  // Users fetched from the API
  const [users, setUsers] = useState([]);
  console.log("🚀 ~ file: index.jsx:17 ~ Main ~ users:", users);

  const handleQueryInput = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("search/users?q=" + query);
      return data?.items;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchUsers = async (e) => {
    e.preventDefault();
    if (query) {
      const items = await fetchUsers();
      setUsers(items);
    }
    setQuery("");
  };

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
            placeholder="Search users by login"
            value={query}
            onChange={handleQueryInput}
          />
          <SearchButton onClick={handleSearchUsers}>Search</SearchButton>
        </form>
      </SearchForm>
      <SearchResults>
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </SearchResults>
    </Container>
  );
};

export default Main;
