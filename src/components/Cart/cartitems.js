import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCartItems } from '../../actions/actions';


export default function CartItem({ item }) {
    const { name, brand, price, cartKey} = item;
    const dispatch = useDispatch();
    const cartList = useSelector((state) => state.cartList);

    const handleRemove = () => {
        cartList.splice(cartList.indexOf(item), 1);
        dispatch(setCartItems(cartList.filter(i => i.key !== cartKey)));
    }

     return (
        <div className="card" style={{width: "20rem", marginBottom: "1rem"}}>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Brand: {brand}</h6>
            <p className="card-text">{"Pris: " + price + "kr"}</p>
            <button onClick={handleRemove}>Remove</button>
            {/* <Link to={`/detail/${id}`} className="btn btn-info">
            Item detail
            </Link> */}
            
        </div>
        <hr/>
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