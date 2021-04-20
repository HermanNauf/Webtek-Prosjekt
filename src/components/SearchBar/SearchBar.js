import React from "react";

export default function SearchBar({setSearch}) {
    return (
        <div>
            <input
                type="text"
                placeholder={"Search..."}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}