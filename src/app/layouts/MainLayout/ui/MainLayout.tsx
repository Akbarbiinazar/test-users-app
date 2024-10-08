import { ROUTES } from "@/shared/config/router/routes";
import { Loader } from "@/shared/ui/Loader";
import { Header } from "@/widgets/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const mainLayoutMenuItems = [
  {
    route: ROUTES.appRoute,
    title: "Главная",
  },
];

export const MainLayout = () => {
  return (
    <section>
      <Header />

      <main>
        <div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </section>
  );
};
