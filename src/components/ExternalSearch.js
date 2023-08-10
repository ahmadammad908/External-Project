import React, { useState, useContext } from "react";
import CartContext from "./CartContext";
import { AuthContext } from "./AuthContext";
import MenuLink from "./MenuLink";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function ExternalSearch({ handleAddProduct }) {
  const { productItems, setProductItems } = useContext(CartContext);
  const [externalSearch, setExternalSearch] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  function onSubmitListener(e) {
    // e.preventDefault();
    // try {
    //   e.preventDefault();
    //   fetch(`https://dummyjson.com/products/search?q=${externalSearch}`)
    //     .then((res) => res.json())
    //     .then((data) => setProductItems(data.products));
    //   console.log("Search Items", externalSearch);
    // } catch (error) {
    //   console.log("Products no Found");
    // }
    e.preventDefault();
    fetch(`https://dummyjson.com/products/search?q=${externalSearch}`)
      .then((res) => res.json())
      .then((data) => setProductItems(data.products));
    console.log("Search Items", externalSearch);
  }
  function myFunc() {
    alert("Your Item added in Cart");
  }
  return (
    <>
      <form onSubmit={onSubmitListener}>
        {/* <input
          type="search"
          placeholder="Search External"
          name="search"
          id="search"
          onChange={(e) => setExternalSearch(e.target.value)}
        />
        <input type="submit" value={"submit"}></input> */}
      </form>

      {productItems.length === 0 && (
        <div>
          <h1>Loding the Data</h1>
        </div>
      )}
      <button onClick={handleLogout}>
        <MenuLink text={"logout"} />
      </button>
      {productItems.map((productItem) => (
        <div className="card">
          <img src={productItem.images}></img>
          <h3> {productItem.title}</h3>
          <p> {productItem.price}</p>
          <button onClick={() => handleAddProduct(productItem)(myFunc())}>
            Add to Cart
          </button>
        </div>
      ))}
    </>
  );
}
