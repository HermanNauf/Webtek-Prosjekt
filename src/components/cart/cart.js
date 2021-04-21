import React from 'react';
import { useSelector} from "react-redux";

import Item from "../../components/items/item";

export default function Cart(){
    const cartList = useSelector((state) => state.cartList);



    return(
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <main
                style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    marginTop: 10,
                    marginBottom: 10,
                }}>

                {cartList.map((a) => <Item key={a.id} item={a} />)}
            </main>
        </div>
        )
}