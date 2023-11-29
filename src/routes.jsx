import { Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./pages/mainPage";
import { UserPage } from "./pages/userPage";
import { NotFound } from "./pages/notFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
