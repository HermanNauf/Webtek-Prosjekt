import React from "react";
import { Link } from "react-router-dom";


export default function Item({ item }) {
    const { id, name, description, brand} = item;

     return (
        <div className="card" style={{width: "30rem", marginBottom: "1rem"}}>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Brand: {brand}</h6>
            <p className="card-text">{description}</p>
            <Link to={`/detail/${id}`} className="btn btn-info">
            Item detail
            </Link>

        </div>
      </div>
     );
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