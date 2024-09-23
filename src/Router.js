import React, { useEffect } from "react";
import { useRoutes, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  HomePage,
  NotFoundPage,
  LoginPage,
  QuestionPage,
  CreateQuestionPage,
  LeaderBoardPage
} from "./pages";

import { AuthLayout, MainLayout } from "./layouts";
import PATHS from "./constants/paths";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(state => state.users);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(PATHS.LOGIN);
    }
  }, [isAuthenticated, navigate]);

  return <Outlet />;
};

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <ProtectedRoute />,
          children: [
            { path: "/", element: <HomePage /> },
            { path: "/questions/:id", element: <QuestionPage /> },
            { path: "/add", element: <CreateQuestionPage /> },
            { path: "/leaderboard", element: <LeaderBoardPage /> },
            {
              path: "/404",
              element: <NotFoundPage />,
            },
            {
              path: "*",
              element: <Navigate to="/404" replace />,
            },
          ]
        },
      ],
    },
    {
      path: "",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <LoginPage /> }
      ]
    }
  ]);
};

export default Router;
