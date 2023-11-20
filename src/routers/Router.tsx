import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layoyt";
import App from "../pages/App";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const routerInLogin = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h3>Страница не найдена</h3>,
    children: [
      { index: true, element: <App /> },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
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
