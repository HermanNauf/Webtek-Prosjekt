import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItems } from "../../actions/actions";
import { useHistory } from "react-router-dom";

export default function Checkout(){
    let cartList = useSelector((state) => state.cartList);
    let history = useHistory()

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
                <button onClick={handlePay} className="btn btn-primary">
                    Pay
                </button>
            </form>

    );
    function handlePay(){
        history.push("/");
        cartList.length = 0;
    
    }
}
