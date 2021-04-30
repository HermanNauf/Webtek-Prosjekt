import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {setCartItems} from "../../actions/actions";
import axios from "axios";

export default function Checkout(){
    const dispatch = useDispatch();
    let cartList = useSelector((state) => state.cartList);
    let history = useHistory()
    const user = useSelector((state) => state.user);
    return(
        <form
                style={{ maxWidth: 400, width: "100%", margin: "30px auto" }}
            >
                <div className="mb-3">
                    <label className="form-label">Firstname</label>
                    <input
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Lastname</label>
                    <input
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email-address</label>
                    <input
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Card-number  </label>
                    <input
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cardholder's name</label>
                    <input
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Expiry date</label>
                    <input
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">CVV</label>
                    <input
                        type="text"
                        className="form-control"
                    />
                </div>
                <button onClick= {handlePay} className="btn btn-primary">
                    Pay
                </button>
            </form>

    );


    //Sends the user back to main page, and sets the content of cart to 0.
    function handlePay(event){
        event.preventDefault();

        axios({
            method: "post",
            url: "http://localhost:8080/api/orderedProducts/saveOrder/" + user.id,
            data: cartList
        }).then((response) => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
        //dispatch(setCartItems([]));
        history.push("/confirmation");
    }
}
