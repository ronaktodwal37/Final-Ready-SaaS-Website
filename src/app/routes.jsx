import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const lazyPage = (loader) => async () => ({ Component: (await loader()).default });

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, lazy: lazyPage(() => import("../pages/Home")) },
      { path: "features", lazy: lazyPage(() => import("../pages/Features")) },
      { path: "pricing", lazy: lazyPage(() => import("../pages/Pricing")) },
      { path: "about", lazy: lazyPage(() => import("../pages/About")) },
      { path: "faq", lazy: lazyPage(() => import("../pages/FAQ")) },
      { path: "contact", lazy: lazyPage(() => import("../pages/Contact")) },
      { path: "*", lazy: lazyPage(() => import("../pages/NotFound")) },
    ],
  },
]);
