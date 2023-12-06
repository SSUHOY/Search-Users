import { SET_USERS } from "../types/users";

export const setUsersResults = (searchResults) => ({
  type: SET_USERS,
  payload: searchResults,
});
