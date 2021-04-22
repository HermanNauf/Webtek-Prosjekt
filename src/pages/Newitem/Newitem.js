import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItems } from "../../actions/actions";
import { useHistory } from "react-router-dom";


export default function Newitem() {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [brand, setBrand] =  React.useState("");
    const [price, setPrice] = React.useState("");

    let history = useHistory();

    const dispatch = useDispatch();
    const items = useSelector((state) => state.items);
    const user = useSelector((state) => state.user);

    function handleSubmit(event) {
        event.preventDefault();

        const id = items.length.toString();

        const newItem = {
            id: id,
            name: name,
            description: description,
            brand: brand,
            price: price
        };
        dispatch(setItems([...items, newItem]));
        history.push("/");
    }

    if (user.hasOwnProperty("type") && user.type === "admin") {
        return (
            <form
                style={{ maxWidth: 400, width: "100%", margin: "30px auto" }}
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Brand</label>
                    <input
                        onChange={(e) => setBrand(e.target.value)}
                        value={brand}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        );
    } else {
        return <h1>Denied</h1>
    }




}