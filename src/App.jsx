import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/setting/Setting";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <Setting />,
      },
      {
        path: "/single",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
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
