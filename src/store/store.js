import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./actions/reducers/users";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleWare) => [
    ...getDefaultMiddleWare(),
  ],
});

export default store;
