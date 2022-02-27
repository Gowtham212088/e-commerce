import React from "react";
import CardDetails from "./CardDetails";
import { arr } from "./App";

export  function CartMap(){
    
    return(
    <div className="cart-data">
         {arr.map((carted,index)=>{
<Cart
{...carted}
 id={index}
/>
         })}
    </div>
    )
}

export function Cart(props){
               return(
                   <div className="cart">
<img src={props.poster} alt={props.name} className="img-c" />
<div className="name-c">
{props.name}
</div>
<div></div>
                   </div>
               )
}