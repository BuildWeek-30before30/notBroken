import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </nav>
        <button onClick={localStorage.setItem("loggedIn", "false")}>
          Logout
        </button>
      </header>
    </div>
  );
}

export default Header;
