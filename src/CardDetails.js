import BasicRating from "./Rating"
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React, { useState } from "react";
import { useContext } from "react";
import { Store } from "./App"; // importing create context from App.js here
// import { arr } from "./App";





export default function CardDetails({name,poster,summary,price,id}){
 
   const userContext = useContext(Store)  // Context data
          console.log(userContext);  // Context data
    const [conData, setConData] = useState()  // Context data with setState.
    return(
        <div className="card-details"> 
         <img src={poster} alt={name} className="img" />
         <div className="name">
<p className="name"> {name}  </p>
         </div>
         <div className="price">
             <BasicRating/>
         <span > {price} </span>
         </div>
         <div className="summary">
         <p>
              {summary}
               </p>
               </div>
         <div className="button">
         <Button 
         style={{width:"35%"}}  
         variant="contained"
          size="large"
          onClick={(()=>{

           setConData( userContext.cartdata.push({name:name,price:price,poster:poster,summary:summary, id:id}))
          })}
          >
          Cart item  <AddShoppingCartIcon/>
        </Button>

        <Button style={{width:"30%"}}   variant="contained" size="large">
          Buy now
        </Button>

        </div>
        </div>
    )
}