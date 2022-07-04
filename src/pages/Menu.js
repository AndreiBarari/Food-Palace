import React, { useState } from "react";
import MenuItem from "../components/MenuItem";
import Cart from "../components/Cart";
import { MenuItems } from "../data/MenuList";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Menu() {
  const [cart, setCart] = useState(false);
  const toggleCart = () => {
    setCart(!cart);
  };
  return (
    <div className="menu">
      <div className="menuHeader">
        <h1 className="title">Menu</h1>
        <div className="shoppingCart">
          Your cart:
          <IconButton
            className="cartIcon"
            aria-label="add to shopping cart"
            onClick={toggleCart}
          >
            <ShoppingCartIcon />
          </IconButton>
        </div>
        {cart && <Cart />}
      </div>
      <div className="menuItems">
        {MenuItems.map((menuItem, key) => {
          return (
            <MenuItem
              key={menuItem.id}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              description={menuItem.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
