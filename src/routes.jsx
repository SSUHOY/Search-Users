import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Main from "./pages/mainPage";
import { UserPage } from "./pages/userPage";
import { NotFound } from "./pages/notFound";

export const AppRoutes = () => {
  const [users, setUsers] = useState([]);
  const [paginationVisible, setPaginationVisible] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            paginationVisible={paginationVisible}
            setPaginationVisible={setPaginationVisible}
            users={users}
            setUsers={setUsers}
          />
        }
      />
      <Route path="/users/:login" element={<UserPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
