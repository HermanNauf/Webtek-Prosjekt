import { Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";


// Pages
import Home from "./pages/Home/Home";
import Newitem from "./pages/Newitem/Newitem";
import Login from "./pages/Login/Login";
import Detail from "./pages/Details/itemDetail"
import { itemlist } from "./lists/itemlist";
import { setItems } from "./actions/actions";

export default function App() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(setItems(itemlist));
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar setSearch={setSearch} user={user}/>
      <Switch>
          <Route exact path="/">
              <Home search={search} />
          </Route>
          <Route exact path="/new">
              <Newitem />
          </Route>
          <Route exact path="/login">
              <Login />
          </Route>
          <Route path="/detail/:id" component={Detail} />
      </Switch>
    </div>
  );
}
