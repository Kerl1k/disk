import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layoyt = () => {
  return (
    <section>
      <div className="">
        <NavLink
          className={({ isActive }) =>
            `header_button ${isActive && "active_header_button"}`
          }
          to="/login"
        >
          Логин
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `header_button ${isActive && "active_header_button"}`
          }
          to="/"
        >
          Регистрация
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `header_button ${isActive && "active_header_button"}`
          }
          to="/app"
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
