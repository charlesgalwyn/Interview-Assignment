import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link
              className={[
                "nav-link",
                location.pathname == "/" ? "active" : "",
              ].join(" ")}
              to="/"
            >
              Add Record
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={[
                "nav-link",
                location.pathname == "/records" ? "active" : "",
              ].join(" ")}
              to="/records"
            >
              Total Records
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
