import React from "react";
import { Link } from "react-router-dom";
import api from "../utils/axiosWithAuth"
import {Button} from "reactstrap"

function Header() {
  return (
    <div className="Header">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/list">Lists</Link>
            </li>
          </ul>
        </nav>
        {/* This gets a positive response from the api. So it is correct I just don't know how to make it work with Redux */}
        <Button onClick={()=>{
          api.get('/auth/logout', { username: 'goodusername', password: 'goodpassword' })
          .then(response => console.log(response))
        }}>
          Logout
        </Button>
      </header>
    </div>
  );
}

export default Header;
