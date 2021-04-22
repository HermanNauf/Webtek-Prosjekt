import React from "react";
import {useSelector} from "react-redux";

import {useHistory, useParams} from "react-router-dom";
import {setItems} from "../../actions/actions";

export default function Detail() {
    const [item, setItem] = React.useState(null);
    const items = useSelector((state) => state.items);
    const user = useSelector((state) => state.user);

    let history = useHistory();

    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let {id} = useParams();
    console.log(id)

    function handleDelete() {
            items.splice(items.indexOf(item), 1);
            setItems(items.filter(p => p.id !== item.id));
            history.push("/");
    }

    React.useEffect(() => {
        const founditem = items.find((p) => p.id === id);
        setItem(founditem);
    }, [id, items]);

    return item ? (
        <div>
            <h1>
                <b>Name: {item.name}</b>
            </h1>
            <h4>Description: {item.description}</h4>
            <p>
                <b>Brand: {item.brand}</b>
            </p>
            <p>
                <b>ID: {item.id}</b>
            </p>
            <p>
                <b>Price: {item.price + "kr"}</b>
            </p>
            {user.hasOwnProperty("type") && user.type === "admin" && (
                <button onClick={handleDelete}  className="btn btn-danger">Delete</button>
            )}
        </div>
    ) : (<p>404: item not found</p>);
}