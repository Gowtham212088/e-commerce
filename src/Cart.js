import React from "react";
import CardDetails from "./CardDetails";
import { arr } from "./App";
import { useContext } from "react";
import { Store } from "./App";




export  function CartMap() {
  const carted =   useContext(Store);
  const  updatedCart =  carted.cartdata;
console.log(updatedCart)
  return (
    <div className="cart-div">
      {updatedCart.map((element) => {
        <CartItems
          name={element.name}
          poster={element.poster}
          price={element.price}
          summary={element.summary}
        />;
      })}
    </div>
  );
}

export function CartItems({ name, poster, price, summary }) {
  return (
    <div className="cart-div1">
      <div className="cart-image">
        <img src={poster} alt={name} />
      </div>
      <div className="cart-name">{name}</div>
      <div className="cart-summary">{summary}</div>
      <div className="art-price">{price}</div>
    </div>
  );
}
