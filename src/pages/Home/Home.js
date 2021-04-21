import React from "react";
import { useSelector } from "react-redux";
import Item from "../../components/items/item";

export default function Home({search}){
    const items = useSelector((state) => state.items);

    let filterItems = (item) => {
        return item.name.toLowerCase().includes(search.toLowerCase())
            || item.description.toLowerCase().includes(search.toLowerCase())
            || item.brand.toLowerCase().includes(search.toLowerCase())
    }

    return(
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}>

            <main
                style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10,
                    marginBottom: 10,
                    flexWrap: "wrap",
                }}>
                {items
                    .filter(filterItems)
                    .map((a) => <Item key={a.id} item={a} />)}
            </main>
        </div>)
}