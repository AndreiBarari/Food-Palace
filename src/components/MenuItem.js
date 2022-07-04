import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function MenuItem({ id, name, image, price, description }) {
  return (
    <div key={id} className="menuItem">
      <div className="itemHeader">
        <div className="title">{name}</div>
        <div className="price">${price}</div>
      </div>
      <img className="image" src={image} alt="" />
      <div className="description">{description}</div>
      <button className="order">
        Order
        <span>
          <AddShoppingCartIcon />
        </span>
      </button>
    </div>
  );
}

export default MenuItem;
