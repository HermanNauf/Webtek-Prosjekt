import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCartItems } from '../../actions/actions';


export default function Item({ item }) {
    const { id, name, description, brand, price} = item;
    const dispatch = useDispatch();
    const cartList = useSelector((state) => state.cartList);

     return (
        <div className="card" style={{width: "30rem", marginBottom: "1rem"}}>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Brand: {brand}</h6>
            <p className="card-text">{description}</p>
            <p className="card-text">{"Price: " + price + "kr"}</p>
            <Link to={`/detail/${id}`} className="btn btn-info">
            Item detail
            </Link>
            <button className="btn btn-success" onClick={addToCart}>Add to cart</button>

        </div>
      </div>
     );

     function addToCart(event){
        event.preventDefault();

        let itemInCart = false;

        cartList.forEach((i) => i.id === item.id ? itemInCart = true : itemInCart = false);

        if (cartList.length === 0 || !itemInCart) {
            const newCartItem = {
                id: item.id,
                name: item.name,
                description: item.description,
                brand: item.brand,
                price: item.price,
                quantity: 1
            }
            dispatch(setCartItems([...cartList, newCartItem]));
            console.log(newCartItem.id);
        } else {
            const index = cartList.findIndex((i) => i.id === item.id);
            cartList[index].quantity += 1;

            dispatch(setCartItems([...cartList]));
        }
     }
}