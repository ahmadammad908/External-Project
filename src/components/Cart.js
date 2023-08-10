import React from "react";
import Recipt from "./recipt";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct }) => {
  //   const totalPrice = cartItems.reduce((item1, item2) => {
  //     // console.log(item1);
  //     if (item1 && !isNaN(item1)) {
  //       console.log({ item1, item2 });

  //       return item1.quantity * item1.price + item2.quantity * item2.price;
  //     }

  //     return item1.quantity * item2.price;
  //   }, 0);

  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalPrice += item.quantity * item.price;
  });

  console.log(totalPrice);

  return (
    <div className="cartItems">
      {cartItems.length === 0 && (
        <div className="cart-empty">
          <h1>No Items are Added</h1>
        </div>
      )}

      <div className="Panda">
        {cartItems.map((item) => (
          <div key={item.id} className="Panda1">
            <img src={item.images}></img>
            <h3>Name:{item.title} X</h3>
            <p className="Para">Rs: {item.price}</p>
            <div>
              <button
                className="cart-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart-items-price">
              {item.quantity}X Rs {item.price}
            </div>
          </div>
        ))}
      </div>
      <div className="TotalPrice">
        <h2 className="TotalPrice1">Total Price: Rs [{totalPrice}]</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        <Link to={"/recipt"} style={{ background: "blue", color: "white" }}>
          Proceed To Product Items
        </Link>
      </div>
    </div>
  );
};

export default Cart;
