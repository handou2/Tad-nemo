import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { HomePage, SignIn, EnrollPage } from "../pages";
import { SandBox } from "../pages/SandBox";
export default function IndexRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/enroll" element={<EnrollPage />} />
        <Route
          path="/"
          element={
            localStorage.getItem("token") ? (
              <SandBox />
            ) : (
              <Navigate replace to="/signIn" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
