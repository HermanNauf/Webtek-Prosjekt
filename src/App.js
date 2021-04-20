<<<<<<< HEAD
import {Switch, Route } from 'react-router-dom';
=======
import { Switch, Route } from 'react-router-dom';
>>>>>>> 331ea0a264e8b7941920e2b841f9ef2fa696d1aa
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useDispatch } from "react-redux";
import React, { useEffect } from "react";



// Pages
import Home from "./pages/Home/Home";
import Newitem from "./pages/Newitem/Newitem"
<<<<<<< HEAD
import { itemlist } from "./lists/itemlist";
import { setItems } from "./actions/actions";
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItems(itemlist));
  }, [dispatch]);
=======
import { setSearch } from "./actions/searchActions";

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearch(""));
    }, [dispatch]);
>>>>>>> 331ea0a264e8b7941920e2b841f9ef2fa696d1aa

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
