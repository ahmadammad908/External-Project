import React from "react";
import Confirmorder from "./Confirmorder";
import { Link } from "react-router-dom";

const recipt = ({ cartItems }) => {
  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalPrice += item.quantity * item.price;
  });
  return (
    <div>
      <h1>
        {cartItems.map((item) => (
          <div key={item.id} className="Panda1">
            <img src={item.images}></img>
            <h3>Name:{item.title}X</h3>
            <p className="Para">Rs: {item.price}</p>
            <div></div>
            <div className="cart-items-price">
              {item.quantity}X Rs {item.price}
            </div>
          </div>
        ))}
        <div className="TotalPrice">
          <h2 className="TotalPrice1">Total Price: Rs [{totalPrice}]</h2>
        </div>
        <div className="Confirm Order">
          <Link
            to={"/confirmorder"}
            style={{ background: "blue", color: "white" }}
          >
            Confirm Order
          </Link>
        </div>
      </h1>
    </div>
  );
};

export default recipt;
