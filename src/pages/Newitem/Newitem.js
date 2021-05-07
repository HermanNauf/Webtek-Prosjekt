import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {setItems} from "../../actions/actions";
import {useHistory} from "react-router-dom";
import axios from "axios";


export default function Newitem() {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [brand, setBrand] = React.useState("");
    const [price, setPrice] = React.useState(0);
    const [validPrice, setValidPrice] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("")

    let history = useHistory();

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    function parsePrice(input) {
        setValidPrice(!isNaN(input));
        setPrice(parseInt(input));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newItem = {
            name: name,
            description: description,
            brand: brand,
            price: price
        };

        if (name.length > 0 && description.length > 0 && brand.length > 0 && validPrice) {
            axios({
                      method: "post",
                      url: "http://158.38.101.212:8080/api/product/addProduct",
                      data: newItem
                  }).then(response => {
                dispatch(setItems(response.data));
            }).catch(error => {
                console.log(error)
            })
            history.push("/");
        } else {
            setErrorMessage("Fields can not be empty");
        }
    }

    if (user.hasOwnProperty("admin") && user.admin) {
        return (
            <form
                style={{maxWidth: 400, width: "100%", margin: "30px auto"}}
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        onChange={(e) => {
                            setName(e.target.value);
                            setErrorMessage("");
                        }}
                        value={name}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        onChange={(e) => {
                            setDescription(e.target.value);
                            setErrorMessage("");
                        }}
                        value={description}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Brand</label>
                    <input
                        onChange={(e) => {
                            setBrand(e.target.value);
                            setErrorMessage("");
                        }}
                        value={brand}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        onChange={(e) => {
                            parsePrice(e.target.value);
                        }}
                        value={price}
                        type="text"
                        className="form-control"
                    />
                    {!validPrice && <p color="red">Invalid price!</p>}
                </div>
                <button type="submit" className="btn btn-primary" disabled={!validPrice}>
                    Submit
                </button>
                {errorMessage.length > 0 && <p>{errorMessage}</p>}
            </form>
        );
    } else {
        return <h1>Denied</h1>
    }
}