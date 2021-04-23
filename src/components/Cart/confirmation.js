import React from 'react';
import { useSelector, useDispatch} from "react-redux";
import {setCartItems} from "../../actions/actions";
import { Link, useHistory } from "react-router-dom";



export default function Confirmation(){
    const cartList = useSelector((state) => state.cartList);
    const dispatch = useDispatch();
    let history = useHistory();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "no-wrap",
                justifyContent: "space-around",
                alignItems: "flex-start",
            }}
        >
            <div style={{
                border: "2px solid lightgrey",
            }}>
                <h1 style={{
                    paddingLeft: "3rem",
                    paddingRight: "3rem",
                }}>Total</h1>
                <hr/>
                <h2>Items: <br/></h2>
                <h4 style={{whiteSpace: "pre-wrap",}}>{cartList.map((a) => "1x " + a.name).join("\n")}</h4>
                <h5>
                    <hr/>
                    Total: {calculatePrice(cartList)}</h5>
                <button onClick={handlePay} className="btn btn-success" to="/checkout">Ok</button>
            </div>
        </div>
    )
    function calculatePrice(list) {
        let total = 0;
        list.map((a) => total += a.price)
    
        return total + "kr";
    }
    function handlePay(){
        // TODO Push cartlist to backend for processing
    
        dispatch(setCartItems([]));
        history.push("/");
    }

}
