import "./App.css";
import React from "react";
import DataMap from "./Card";
import { createContext } from "react";
import CardDetails from "./CardDetails";
import { Switch, Route, Link } from "react-router-dom";
import { CartMap } from "./Cart";
import { CartItems } from "./Cart";
// export var arr = [];
export const Store = createContext();

function App() {
  // console.log(arr);
  const globalData = {
    cartdata: [],
  };
  const styles = { display: "none" };
  return (
    <div className="App">
      <Link to="/cart"> Cart </Link> <br/>
      <Link to="/products"> All products </Link>

      <Store.Provider value={globalData}>
        <Switch>
          <Route exact path="/products">
            {" "}
            <DataMap />{" "}
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/cart">
            {" "}
            <CartMap />{" "}
            <CartItems/>
          </Route>
        </Switch>
      </Store.Provider>
    </div>
  );
}

export default App;