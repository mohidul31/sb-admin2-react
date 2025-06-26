import Footer from "../components/Footer";
import React from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

export default function Dashboard() {
  return (
    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
