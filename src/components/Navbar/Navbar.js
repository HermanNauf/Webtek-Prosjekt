import React from "react";
import {NavLink, Link, useHistory} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import {setUser} from "../../actions/actions";
import {useDispatch} from "react-redux";

export default function Navbar({setSearch, user}) {
  const dispatch = useDispatch();
  let history = useHistory();

  function handleLogout() {
    dispatch(setUser({}));
    history.push("/");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            {user.hasOwnProperty("type") && user.type === "admin" && (
                <li className="nav-item">
                  <NavLink className="nav-link btn btn-outline-success" to="/new" activeClassName="active">
                    New item
                  </NavLink>
                </li>)
            }
          </ul>

          <SearchBar setSearch={setSearch}/>

          {/* Displays greeting if logged in */}
          {user.hasOwnProperty("username") &&
          <p>
            Hello {user.username}!
          </p>
          }
          {user.hasOwnProperty("username") ? (
              <button className="nav-link btn btn-outline-success" onClick={handleLogout}>
                Log Out
              </button> )
              : (<NavLink className="nav-link btn btn-outline-success" to="/login" activeClassName="active">
                Log In
              </NavLink>)
          }
        </div>
      </div>
    </nav>
  );
}
