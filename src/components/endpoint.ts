import React from "react";
import { IUser } from "../typeScripts/IUser";

const endpoint = (user: IUser) => {
  if (user.token) {
    localStorage.setItem("token", user.token);
  }
};

export default endpoint;
