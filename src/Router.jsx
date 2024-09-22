import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

import {
  HomePage,
  NotFoundPage
} from "./pages";

import { MainLayout } from "./layouts";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <HomePage /> }
      ],
    },
    {
      path: "/404",
      element: <NotFoundPage />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
};

export default Router;
