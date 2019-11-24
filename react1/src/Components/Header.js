import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
