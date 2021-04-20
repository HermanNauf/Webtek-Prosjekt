import React from "react";

import SearchBar from "../../components/SearchBar/SearchBar";

import { itemlist } from "../../lists/itemlist";

export default function Home(){
    const [search, setSearch] = React.useState("");
    const [items, setItems] = React.useState([]);


    return(
        <div>
            <SearchBar setSearch={setSearch} />
        </div>
    );
}