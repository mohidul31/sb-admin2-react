import Footer from "../components/Footer";
import React from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

export default function MainLayout({ children }) {
  return (
    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div className="container-fluid">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
