import { Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


// Pages
import Home from "./pages/Home/Home";
import Newitem from "./pages/Newitem/Newitem"
import Detail from "./pages/Details/itemDetail"
import { itemlist } from "./lists/itemlist";
import { setItems } from "./actions/actions";

export default function App() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(setItems(itemlist));
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar setSearch={setSearch}/>
      <Switch>
          <Route exact path="/">
              <Home search={search} />
          </Route>
          <Route exact path="/new">
              <Newitem search={search}/>
          </Route>
          <Route path="/detail/:id" component={Detail} />
          </Switch>

    </div>
  );
}
