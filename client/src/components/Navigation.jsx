import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <ul className="navbar-nav ">
          <li className="navbar-brand">
            <Link
              className={[
                "nav-link",
                location.pathname == "/" ? "active" : "",
              ].join(" ")}
              to="/"
            >
              Add User
            </Link>
          </li>
          <li className="navbar-brand">
            <Link
              className={[
                "nav-link",
                location.pathname == "/records" ? "active" : "",
              ].join(" ")}
              to="/records"
            >
              Total Users
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
