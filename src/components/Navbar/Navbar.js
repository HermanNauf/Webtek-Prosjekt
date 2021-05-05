import React, {useEffect} from "react";
import {NavLink, Link, useHistory} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import {setUser} from "../../actions/actions";
import {useDispatch, useSelector} from "react-redux";

export default function Navbar({setSearch}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cartList = useSelector((state) => state.cartList);
  const [cartSize, setCartSize] = React.useState(0);

  const history = useHistory();

  useEffect(() => {
    let cartCount = 0;
    cartList.forEach((i) => cartCount += i.quantity);
    setCartSize(cartCount);
  }, [cartList, dispatch])

  function handleLogout() {
    dispatch(setUser({}));
    history.push("/");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active">
                Home
              </NavLink>
            </li> */}
            {user.hasOwnProperty("admin") && user.admin && (
                <li className="nav-item">
                  <NavLink className="nav-link btn btn-outline-success" to="/new" activeClassName="active">
                    New item
                  </NavLink>
                </li>)}
          </ul>

          <SearchBar setSearch={setSearch}/>
          <NavLink className="nav-link" to="/cart" activeClassName="active">
                Cart {cartSize > 0 && "(" + cartSize + ")"}
              </NavLink>

          {/* Displays greeting if logged in */}
          {user.hasOwnProperty("username") &&
          <p style={{ margin: "8px"}}>
            Logged in as: <b>{user.username}</b>
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
          {!user.hasOwnProperty("username") &&
          <NavLink className="nav-link btn btn-outline-success" to="/register" activeClassName="active">
            Register
          </NavLink>}
        </div>
      </div>
    </nav>
  );
}
