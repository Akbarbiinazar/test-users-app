import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { ROUTES } from "@/shared/config/router/routes";
import { ThemeSwitcher } from "@/features/switch-theme";

const menuItems = [{ id: "1", label: "Home", path: ROUTES.appRoute }];

const MemoHeader = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Users App</div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export const Header = React.memo(MemoHeader);
