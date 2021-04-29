import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCartItems } from '../../actions/actions';
import axios from "axios";


export default function Item({ item }) {
    const { id, name, description, brand, price} = item;

    const user = useSelector((state) => state.user);

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

        axios({
            method: "post",
            url: "http://localhost:8080/api/cart/addToCart/" + user.id,
            data: item
        }).then((response) => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
     }
}