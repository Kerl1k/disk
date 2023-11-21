import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import disk from "../img/disk.png";
import exit from "../img/exit.png";
import "./Layoyt.css";

const Layoyt = () => {
  const Exit = () => {
    localStorage.setItem("token", "0");
  };
  return (
    <section>
      <div className="header">
        <NavLink
          className={({ isActive }) =>
            `header_button ${isActive && "active_header_button"}`
          }
          to="/"
        >
          <div className="img">
            <img className="img" src={disk} />
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `header_button ${isActive && "active_header_button"}`
          }
          to="/signIn"
        >
          <div onClick={Exit} className="img">
            <img className="img" src={exit} />
          </div>
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default Layoyt;
