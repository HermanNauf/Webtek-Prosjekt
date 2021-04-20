import { Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


// Pages
import Home from "./pages/Home/Home";
import Newitem from "./pages/Newitem/Newitem"
import { setSearch } from "./actions/searchActions";

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearch(""));
    }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={Newitem} />
      </Switch>

    </div>
  );
}
