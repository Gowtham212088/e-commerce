import "./App.css";
import React from "react";
import DataMap from "./Card";
import { createContext } from "react";
import CardDetails from "./CardDetails";
import { Switch, Route } from "react-router-dom";
import {CartMap} from "./Cart";
import DenseAppBar from "./Navbar";
import { useState } from "react";
// export var arr = [];
export const Store = createContext({cartdata:[], setCartData:()=>{}}); // Setting initial context data

function App() {
  // console.log(arr);

const [cartdata,setCartData]=useState([])

  const globalData = {
   cartdata, setCartData
  };

 

  // const styles = { display: "none" };
  return (
    <div className="App">
    
     <Store.Provider value={globalData}>
     <DenseAppBar/>
       
      
    



        <Switch>
        
          <Route exact path="/products">
            {" "}
            <DataMap />{" "}
          </Route>

          <Route exact path="/cart">
            {" "}
            <CartMap />{" "}
          </Route>
        </Switch>
      </Store.Provider>
    </div>
  );
}







export default App;
