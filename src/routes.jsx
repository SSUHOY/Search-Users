import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Main from "./pages/mainPage";
import { UserPage } from "./pages/userPage";
import { NotFound } from "./pages/notFound";

export const AppRoutes = () => {
  const [paginationVisible, setPaginationVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({ sortProperty: "" });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            paginationVisible={paginationVisible}
            setPaginationVisible={setPaginationVisible}
            query={query}
            setQuery={setQuery}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            sortType={sortType}
            setSortType={setSortType}
          />
        }
      />
      <Route path="/users/:login" element={<UserPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
