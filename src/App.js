import {Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import { useDispatch } from "react-redux";

import React, { useEffect } from "react";



// Pages
import Home from "./pages/Home/Home";
import Newitem from "./pages/Newitem/Newitem"
import { itemlist } from "./lists/itemlist";
import { setItems } from "./actions/actions";
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItems(itemlist));
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
