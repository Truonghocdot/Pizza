import Home from "./pages/Home";
import React, { Suspense } from "react";
import {
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
// import CreatePizzPage from "./pages/CreatePizzaPage";
const CreatePizzaPage = React.lazy(() => import("./pages/CreatePizzaPage"));
// import DetailPizzaPage from "./pages/DetailPizzaPage";
const DetailPizzaPage = React.lazy(() => import("./pages/DetailPizzaPage"));

const appRoute: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/create-pizza",
        element: <CreatePizzaPage />,
      },
      {
        path: "/pizza/:id",
        element: <DetailPizzaPage />,
      },
    ],
  },
];
const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: appRoute,
  },
]);
function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
