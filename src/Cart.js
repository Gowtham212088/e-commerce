import React from "react";
import CardDetails from "./CardDetails";
import { arr } from "./App";
import { useContext } from "react";
import { Store } from "./App";

export default function CartMap() {
  const carted = useContext(Store);
  const updatedCart = carted.cartdata;

  return (
    <div className="cart-main-div">
      {updatedCart.map((element) => {
        return (
          <CartItems
            name={element.name}
            poster={element.poster}
            price={element.price}
            summary={element.summary}
          />
        );
      })}
      {/* <CartItems
      {...updatedCart}
      /> */}
    </div>
  );
}

function CartItems({ name, poster, summary, price }) {
  console.log({ name: name, poster: poster, summary: summary, price: price });
  return (
    <div className="cart-div1">
      <div className="cart-image">
        <img src={poster} alt={name} className="img-cart" />
      </div>
      <div className="cart-name"><b>{name} </b></div> 
      <div className="cart-summary">{summary}</div>
      <div className="cart-price">{price}</div>
    </div>
  );
}
