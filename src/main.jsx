import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App.jsx";
import Blank from "./pages/Blank.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Profile from "./pages/Profile.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="blank" element={<Blank />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
