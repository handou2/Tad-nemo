import React from "react";
import "./App.less";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, SignIn, EnrollPage } from "./pages";
import { SandBox } from "./pages/SandBox";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SandBox />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/enroll" element={<EnrollPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
