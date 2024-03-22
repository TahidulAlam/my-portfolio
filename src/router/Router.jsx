/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Home from "../pages/home/Home";
import Allprojects from "../pages/allProjects/Allprojects";
import Project from "../pages/allProjects/Project";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Allprojects />,
      },
      {
        path: "projects/:id",
        element: <Project />,
      },
    ],
  },
]);

export default Router;
