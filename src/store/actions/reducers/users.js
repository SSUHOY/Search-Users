import { SET_USERS } from "../types/users";

const initialState = {
  setUsers: [],
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        setUsers: action.payload,
      };
    default:
      return state;
  }
}
