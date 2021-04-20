import React from "react";
import { useSelector } from "react-redux";
import Item from "../../components/items/item";

import { itemlist } from "../../lists/itemlist";

export default function Home(){
    const items = useSelector((state) => state.items);

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
                {items.map((a) => <Item key={a.id} item={a} />)}
            </main>
        </div>)
}