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
            border: "2px solid lightgrey",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        ><h1 style={{position:"absolute",
                    right: "35rem",
                    height: "26rem",
                      }}>Total:{calculatePrice(cartList)}</h1>
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
function calculatePrice(list){
  let total = 0;
  list.map((a) => total += a.price)

  return total;
}