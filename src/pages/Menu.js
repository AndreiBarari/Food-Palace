import React, { useState } from "react";
import { products } from "../data/MenuList";
import MenuItem from "../components/MenuItem";
import Cart from "../components/Cart";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Menu() {
  const [cart, setCart] = useState(false);
  const toggleCart = () => {
    setCart(!cart);
  };
  const [cartItems, setCartItems] = useState([]);
  const onAdd = product => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map(x => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = product => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map(x => (x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
      );
    }
  };

  const confirm = () => {
    setCartItems([]);
  };

  const countCartItems = cartItems.length;

  return (
    <div className="menu">
      <div className="menuHeader">
        <div className="headerContent">Menu</div>
        <div className="headerContent">
          Your order:
          <IconButton className="cartIcon" aria-label="add to shopping cart" onClick={toggleCart}>
            <ShoppingCartIcon />
          </IconButton>
          {cartItems.length !== 0 && <span className="itemCount">{countCartItems}</span>}
        </div>
        {cart && <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} confirm={confirm} />}
      </div>
      <div className="menuItems">
        {products.map(product => {
          return <MenuItem key={product.id} product={product} onAdd={onAdd} />;
        })}
      </div>
    </div>
  );
}

export default Menu;
