import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function MenuItem(props) {
  const { product, onAdd } = props;

  return (
    <div key={product.id} className="menuItem">
      <div className="itemHeader">
        <div className="title">{product.name}</div>
        <div className="price">${product.price}</div>
      </div>
      <img className="image" src={product.image} alt="" />
      <div className="description">{product.description}</div>
      <button className="order" onClick={() => onAdd(product)}>
        Order
        <span>
          <AddShoppingCartIcon />
        </span>
      </button>
    </div>
  );
}

export default MenuItem;
