import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./global.css";
import Header from "./components/headrer/Header";
import Footer from "./components/footer/Footer"
import List from "./pages/list/List";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/list",
        element: <List />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
