import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Profile from "./pages/Profile.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  </StrictMode>
);
