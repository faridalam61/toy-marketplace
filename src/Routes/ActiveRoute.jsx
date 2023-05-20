import React from "react";
import { NavLink } from "react-router-dom";

function ActiveRoute({ to, children }) {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active-link" : "")}>
      {children}
    </NavLink>
  );
}

export default ActiveRoute;