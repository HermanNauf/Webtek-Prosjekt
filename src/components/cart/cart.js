import React from 'react';
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";


import CartItem from "../../components/Cart/cartitems";

export default function Cart(){
    const cartList = useSelector((state) => state.cartList);



    return(
        <div
          style={{
            marginLeft: "35rem",
            width: "25rem",
            border: "2px solid lightgrey",
            borderRadius: "5px",
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
            <div style={{position:"absolute",
                    right: "35rem",
                    height: "auto",
                    border: "2px solid lightgrey",
                    top: "5rem",
                      }}>
                        <h1 style = {{                    
                          paddingLeft: "3rem",
                          paddingRight: "3rem",}}>Total</h1>
                        <hr/>
                        <h2>Items:<br/></h2>
                        <h4 style = {{whiteSpace: "pre-wrap", }}>{cartList.map((a) => "1x " + a.name).join("\n")}</h4>
                        <h5><hr/>Total:{calculatePrice(cartList)}</h5>
                        <Link className="btn btn-success" to="/checkout">Go to checkout</Link>

                        </div>
        </div>
        )
}
function calculatePrice(list){
  let total = 0;
  list.map((a) => total += a.price)

  return total + "kr";
}