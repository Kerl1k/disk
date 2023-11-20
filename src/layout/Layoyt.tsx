import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { fileApi } from "../services/fileService";

const Layoyt = () => {
  const { isError, isLoading } = fileApi.useFetchAllFileQuery("");
  console.log(isLoading);

  if (isLoading === false) {
    if (isError === true) {
      console.log("HUI");
    }
  }
  return (
    <section>
      <div className="">
        <NavLink
          className={({ isActive }) =>
            `header_button ${isActive && "active_header_button"}`
          }
          to="/signIn"
        >
          Логин
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `header_button ${isActive && "active_header_button"}`
          }
          to="/"
        >
          Основа
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default Layoyt;
