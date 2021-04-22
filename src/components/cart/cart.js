import React from 'react';
import { useSelector} from "react-redux";

import CartItem from "../../components/Cart/cartitems";

export default function Cart(){
    const cartList = useSelector((state) => state.cartList);



    return(
        <div
          style={{
            marginLeft: "35rem",
            width: "31rem",
            border: "1px solid grey",
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

                {cartList.map((a) => <CartItem key={a.id} item={a} />)}
            </main>
        </div>
        )
}