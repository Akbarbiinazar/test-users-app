import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Header } from "../widgets/Header/ui/Header";
import { Outlet } from "react-router-dom";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Outlet />
    </>
  );
};
