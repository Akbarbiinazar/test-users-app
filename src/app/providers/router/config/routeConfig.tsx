import { createBrowserRouter, Outlet } from "react-router-dom";

import { ROUTES } from "@/shared/config/router/routes";

import { Error404Page } from "@/pages/Error404Page";

import { MainPage } from "@/pages/MainPage";

import { App } from "@/app/App";

import { MainLayout } from "@/app/layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: ROUTES.appRoute,
    element: <App />,
    children: [
      {
        path: ROUTES.appRoute,
        element: (
          <>
            <MainLayout />
          </>
        ),
        children: [
          {
            index: true,
            element: <MainPage />,
          },

          {
            path: "*",
            element: <Error404Page />,
          },
        ],
      },
    ],
  },
]);
