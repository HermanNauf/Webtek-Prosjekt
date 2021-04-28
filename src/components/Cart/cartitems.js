import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCartItems } from '../../actions/actions';
import {Link} from "react-router-dom";


export default function CartItem({ item }) {
    const { id, name, brand, price, quantity } = item;
    const dispatch = useDispatch();
    const cartList = useSelector((state) => state.cartList);

    const handleRemove = () => {
        if (quantity === 1) {
            cartList.splice(cartList.indexOf(item), 1);
            dispatch(setCartItems(cartList.filter(i => i.id !== id)));
        } else {
            const index = cartList.findIndex((i) => i.id === item.id);
            cartList[index].quantity -= 1;

            dispatch(setCartItems([...cartList]));
        }
    }

     return (
        <div className="card" style={{width: "20rem", marginBottom: "1rem"}}>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Brand: {brand}</h6>
            <p className="card-text">{"Pris: " + price + "kr"}</p>
            <p className="card-text">Antall: {quantity}</p>
            <button className = "btn btn-danger" onClick={handleRemove}>Remove</button>
            <Link to={`/detail/${id}`} className="btn btn-info">
            Item detail
            </Link>
        </div>
      </div>

     );
}