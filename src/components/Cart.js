import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

function Cart({ cartItems, onAdd, onRemove, confirm }) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 50 ? 0 : 5;
  const totalPrice = itemsPrice + shippingPrice;

  return (
    <div className="cart">
      {cartItems.length === 0 && <div className="cartTitle">Cart is empty</div>}
      {cartItems.map(item => (
        <div key={item.id} className="row">
          <div className="collumn-1">{item.name}</div>
          <div className="collumn-2">
            <div className="buttons">
              <button onClick={() => onRemove(item)} className="remove">
                <IndeterminateCheckBoxIcon />
              </button>
              <button onClick={() => onAdd(item)} className="add">
                <AddBoxIcon />
              </button>
            </div>
            <div className="">
              {item.qty} * ${item.price}
            </div>
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="cost">
            <div className="costSummary">
              <div>Items Price</div>
              <div>${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="costSummary">
              <div>Shipping Price</div>
              <div>${shippingPrice}</div>
            </div>
            <div className="costSummary total">
              <div>Total</div>
              <div>${totalPrice.toFixed(2)}</div>
            </div>
          </div>
        </>
      )}

      {cartItems.length !== 0 && (
        <button className="confirm" onClick={confirm}>
          Confirm
        </button>
      )}
    </div>
  );
}

export default Cart;
