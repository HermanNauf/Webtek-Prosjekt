import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";


import CartItem from "./cartitems";
import axios from "axios";
import {setCartItems} from "../../actions/actions";

export default function Cart() {
    const dispatch = useDispatch();
    const cartList = useSelector((state) => state.cartList);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (user.id !== undefined) {
            axios("http://localhost:8080/api/cart/products/" + user.id)
                .then(response => {
                    dispatch(setCartItems(response.data));
                    console.log(response.data)
                }).catch(error => {
                console.log(error)
            })
        }

    }, [dispatch, user.id]);

    let cart = [];

    cartList.forEach((i) => {

        const product = {
            id: i.id,
            name: i.name,
            brand: i.brand,
            price: i.price,
            quantity: i.quantity

        }
        cart = [...cart, product]
    })


    return (
        <div
            style={{
                marginLeft: "10rem",
                marginRight: "10rem",
                display: "flex",
                flexDirection: "row",
                flexWrap: "no-wrap",
                justifyContent: "space-around",
                alignItems: "flex-start",
            }}
        >
            <main
                style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    marginTop: 10,
                    marginBottom: 10,
                }}>
                {cart.map((a) => <CartItem key={a.id} item={a}/>)}
            </main>
            <div style={{
                position: "fixed",
                height: "auto",
                border: "2px solid lightgrey",
                top: "5rem",
                right: "3rem"
            }}>
                <h1 style={{
                    paddingLeft: "3rem",
                    paddingRight: "3rem",
                }}>Total</h1>
                <hr/>
                <h2>Items: <br/></h2>
                <h4 style={{whiteSpace: "pre-wrap",}}>{cartList.map((a) => a.quantity + "x " + a.name).join("\n")}</h4>
                <h5>
                    <hr/>
                    Total: {calculatePrice(cartList)}</h5>
                <Link className="btn btn-success" to="/checkout">Go to checkout</Link>
            </div>
        </div>
    )
}

export function calculatePrice(list) {
    let total = 0;
    list.map((a) => total += (a.price * a.quantity));

    return total + "kr";
}