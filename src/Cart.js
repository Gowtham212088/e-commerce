import React from "react";
import CardDetails from "./CardDetails";
import { arr } from "./App";
import { useContext } from "react";
import { Store } from "./App";
import { CartInfo } from "./CartInfo";
import Button from '@mui/material/Button';


export  function CartMap() {
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

export function CartItems({ name, poster, summary, price }) {
  
const contData = useContext(Store)

const cartD = contData.cartdata

const sCartD = contData.setCartData

  console.log({ name: name, poster: poster, summary: summary, price: price });
  return (
    <div id="cart" className="container my-5 mx-5">
      {/* <div className="cart-image">
        <img src={poster} alt={name} id="img-cart" className="img-fluid" />
      </div>
      <div className="cart-name"><b>{name} </b></div> 
      <div className="cart-summary">{summary}</div>
      <div className="cart-price">{price}</div> */}
<div className="row">
<div className="col-md-6"> <img id="img-cart" className="img-fluid" src={poster} alt={name} /> </div>

<div className="col-md-6 py-5 " id="nps">

 <h3 className="px-5"> {name} </h3>
 <h4> {price} </h4>
 <p> {summary} </p>
 <Button variant="contained" style={{height:"35px"}}> Buy Now</Button>
 <Button color="error" variant="contained" style={{height:"35px", marginLeft:"35px"}} > Delete </Button>
</div>

</div>
     
    </div>
  );
}
