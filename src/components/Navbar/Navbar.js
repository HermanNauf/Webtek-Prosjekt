import React from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar({setSearch}) {
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
            <li className="nav-item">
              <NavLink className="nav-link btn btn-outline-success" to="/new" activeClassName="active">
                New item
              </NavLink>
            </li>
          </ul>
          <SearchBar setSearch={setSearch}/>
        </div>
      </div>
    </nav>
  );
}
