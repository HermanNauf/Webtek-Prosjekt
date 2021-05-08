import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setCartItems} from "../../actions/Actions";

export default function Item({item}) {
    const {id, name, description, brand, price} = item;

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
        <div className="card" style={{width: "25rem", marginBottom: "1rem", marginRight: "1rem"}}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Brand: {brand}</h6>
                <p className="card-text">{description}</p>
                <p className="card-text">{"Price: " + price + "kr"}</p>
                <Link to={`/detail/${id}`} className="btn btn-info">
                    Item detail
                </Link>
                {user.hasOwnProperty("username") && user.hasOwnProperty("password") &&
                <button className="btn btn-success" onClick={addToCart}>Add to cart</button>
                }
            </div>
        </div>
    );

    function addToCart(event) {
        event.preventDefault();

        axios({
            method: "post",
            url: "http://158.38.101.212:8080/api/cart/addToCart/" + user.id,
            data: item
        }).then(() => {
            //Updates the cart field next to the search field every time you add item
            axios("http://158.38.101.212:8080/api/cart/products/" + user.id)
                .then(response => {
                    dispatch(setCartItems(response.data));
                }).catch(error => {
                console.log(error)
            })

        }).catch(error => {
            console.log(error);
        })

    }
}