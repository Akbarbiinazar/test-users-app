import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "react-toastify/ReactToastify.css";

import { router } from "@/app/providers/router";
import { StoreProvider } from "./app/providers/store/index.ts";

createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <RouterProvider router={router} />
  </StoreProvider>
);
