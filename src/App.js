import {Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";


// Pages
import Home from "./pages/Home/Home";
import Newitem from "./pages/Newitem/Newitem";
import Login from "./pages/Login/Login";
import Checkout from "./pages/Checkout/checkout";
import Detail from "./pages/Details/itemDetail";
import Register from "./pages/Registration/RegisterUser";

import {setCartItems, setItems} from "./actions/actions";
import Cart from './components/Cart/Cart';
import Confirmation from "./components/Cart/confirmation";
import axios from 'axios';


export default function App() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const user = useSelector((state) => state.user);

    useEffect(() => {
        axios("http://158.38.101.212:8080/api/product/products")
            .then(response => {
                dispatch(setItems(response.data));
                console.log(response.data)
            }).catch(error => {
            console.log(error)
        })
        if (undefined !== user.id) {
            axios("http://158.38.101.212:8080/api/cart/products/" + user.id)
                .then(response => {
                    dispatch(setCartItems(response.data));
                    console.log(response.data)
                }).catch(error => {
                console.log(error)
            })
        }
    }, [dispatch, user.id]);

    return (
        <div className="App">
            <Navbar setSearch={setSearch}/>
            <Switch>
                <Route exact path="/">
                    <Home search={search}/>
                </Route>
                <Route exact path="/new">
                    <Newitem/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route path="/detail/:id" component={Detail}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/confirmation" component={Confirmation}/>
                <Route path="/register" component={Register}/>
            </Switch>
        </div>
    );
}
