import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layoyt";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import App from "../pages/App";

const routerInLogin = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h3>Страница не найдена</h3>,
    children: [
      { index: true, element: <Registration /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/app",
        element: <App />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <div>
      <RouterProvider router={routerInLogin} />
    </div>
  );
};

export default AppRouter;
