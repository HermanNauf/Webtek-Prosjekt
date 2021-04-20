import React from "react";

import SearchBar from "../../components/SearchBar/SearchBar";

export default function Home(){
    const [search, setSearch] = React.useState("");

    return(
        <div>
            <SearchBar setSearch={setSearch} />
        </div>
    );
}