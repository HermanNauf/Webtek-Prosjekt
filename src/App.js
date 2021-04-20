import { Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import {useState} from "react";

// Pages
import Home from "./pages/Home/Home";
import Newitem from "./pages/Newitem/Newitem"

export default function App() {
    const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Navbar setSearch={setSearch}/>
      <Switch>
          <Route exact path="/">
              <Home search={search} />
          </Route>
          <Route exact path="/new">
              <Newitem />
          </Route>
      </Switch>

    </div>
  );
}
