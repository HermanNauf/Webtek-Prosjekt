import React from "react";

export default function SearchBar({setSearch}) {
    return (
        <div>
            <input
                className="form-control me-2"
                type="text"
                placeholder={"Search..."}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}