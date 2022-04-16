import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import { useState } from "react";
import { Store } from "./App";

export default function ButtonAppBar() {
  const contextData = useContext(Store);

  var cartDatas = contextData.cartdata;

  const history = useHistory();

  const cartHandler = () => history.push("/cart"); // onClick function for CartHandler

  const productsHandler = () => history.push("/products"); // onClick for productsHandler

  console.log(cartDatas);

  return (
    <div id="navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button color="error" size="large" onClick={productsHandler}>
                <Typography id="products">Products</Typography>
              </Button>
            </Typography>

            <Button color="inherit" size="large" onClick={cartHandler}>
              {" "}
              CART {cartDatas.length}{" "}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
