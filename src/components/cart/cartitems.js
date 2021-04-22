import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCartItems } from '../../actions/actions';


export default function CartItem({ item }) {
    const { id, name, description, brand, price} = item;
    const dispatch = useDispatch();
    const cartList = useSelector((state) => state.cartList);

     return (
        <div className="card" style={{width: "30rem", marginBottom: "1rem"}}>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Brand: {brand}</h6>
            <p className="card-text">{"Pris: " + price + "kr"}</p>
            <Link to={`/detail/${id}`} className="btn btn-info">
            Item detail
            </Link>

        </div>
      </div>
     );

     function AddToCart(event){

    
        event.preventDefault();
        dispatch(setCartItems([...cartList, item]));
        console.log(cartList.length.toString())
    
     }
 
    //(
    //     <div style={useStyles()}>
    //         <h2>{title}</h2>
    //         <p>{body}</p>
    //         <p>Author: {author}</p>
    //         <Link to={`/detail/${title}`} className="btn btn-info">
    //       Product Details
    //     </Link>
    //     </div>
    // );
}