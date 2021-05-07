import React from "react";
import {useSelector} from "react-redux";

import {useHistory, useParams} from "react-router-dom";
import {setItems} from "../../actions/actions";
import axios from "axios";

export default function Detail() {
    const [item, setItem] = React.useState({});
    const items = useSelector((state) => state.items);
    const user = useSelector((state) => state.user);

    let history = useHistory();

    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let {id} = useParams();
    console.log(id)

    function handleDelete() {

        axios({
            method: "post",
            url: "http://158.38.101.212:8080/api/product/delete",
            data: item
        })
            .catch(error => {
            console.log(error)
        })

            items.splice(items.indexOf(item), 1);
            setItems(items.filter(p => p.id !== item.id));
            history.push("/");
    }

    React.useEffect(() => {
        const foundItem = items.find((p) => p.id === parseFloat(id));
        setItem(foundItem);
    }, [id, items]);

    return item ? (


        <div className="card" style={{width: "18rem;", marginLeft: "35rem", marginRight: "35rem", marginTop: "5rem"}}>
            <div className="card-body">
                <h1 className="card-title">
                Name: {item.name}
                </h1>
                <p className ="card-subtitle mb-2 text-muted">
                    Product ID: {item.id}
                </p>
                <h4 className="card-text">
                    Description: {item.description}</h4>
                <p>
                    <b>Brand: {item.brand}</b>
                </p>
                <p>
                    Price: {item.price + "kr"}
                </p>
                {user.hasOwnProperty("admin") && user.admin && (
                    <button onClick={handleDelete}  className="btn btn-danger">Delete</button>
                )}
            </div>
        </div>
    ) : (<p>404: item not found</p>);
}