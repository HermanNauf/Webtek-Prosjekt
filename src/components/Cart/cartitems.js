import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {setCartItems, setUser} from '../../actions/actions';
import {Link} from "react-router-dom";
import axios from "axios";


export default function CartItem({ item }) {
    const { id, name, brand, price, quantity } = item;
    const dispatch = useDispatch();
    const cartList = useSelector((state) => state.cartList);
    const user = useSelector((state) => state.user);

    const handleRemove = () => {
        axios({
            method: "post",
            url: "http://localhost:8080/api/cart/removeFromCart/" + id,
            data: user
        }).then((response) => {
            dispatch(setCartItems(response.data));
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

     return (
        <div className="card" style={{width: "20rem", marginBottom: "1rem"}}>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Brand: {brand}</h6>
            <p className="card-text">{"Pris: " + price + "kr"}</p>
            <p className="card-text">Quantity: {quantity}</p>
            <button className = "btn btn-danger" onClick={handleRemove}>Remove</button>
            <Link to={`/detail/${id}`} className="btn btn-info">
            Item detail
            </Link>
        </div>
      </div>

     );
}