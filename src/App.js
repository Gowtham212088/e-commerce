import "./App.css";
import React from "react";
import DataMap from "./Card";
import { createContext } from "react";
import CardDetails from "./CardDetails";
import { Switch, Route } from "react-router-dom";
import CartMap from "./Cart";
import DenseAppBar from "./Navbar";

// export var arr = [];
export const Store = createContext();

function App() {
  // console.log(arr);
  const globalData = {
    cartdata: [],
  };
  // const styles = { display: "none" };
  return (
    <div className="App">
    
     <Store.Provider value={globalData}>
     <DenseAppBar/>
       </Store.Provider>
      
      <Store.Provider value={globalData}>



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
