import React, { useState } from "react";
import ExternalSearch from "./ExternalSearch";

const Product = ({ productItems, handleAddProduct }) => {
  ////////////////Alert The Product Items/////////////////////
  function myFunc() {
    alert("Your Item added in Cart");
  }

  ///////////////////// Internal Search////////
  const [internalSearch, setInternalSearch] = useState("");
  // const[ExternalSearch , setExternalSearch= useState()s
  function getFilteredProducts() {
    if (!internalSearch) return productItems;
    return productItems.filter((item) =>
      item.title.toLowerCase().includes(internalSearch.toLowerCase())
    );
  }

  return (
    <div>
      <input
        type={"search"}
        name="search"
        id="search"
        placeholder="Internal"
        value={internalSearch}
        onChange={(e) => setInternalSearch(e.target.value)}
      ></input>
      <input type={"text"} placeholder="External" id="search"></input>
      <button>Submit</button>

      <div className="products">
        {/* etFilterd Products  The Products  */}
        {getFilteredProducts().length === 0 && "no result founds"}
        {getFilteredProducts().map((productItem) => (
          <div className="card">
            <img src={productItem.images}></img>
            <h3>Dish Name : {productItem.title}</h3>
            <p> Rs : {productItem.price}</p>
            <button onClick={() => handleAddProduct(productItem)(myFunc())}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
