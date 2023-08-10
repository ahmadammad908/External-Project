import React, { useContext, useState } from "react";
import "./App.css";
import useData from "./components/Data";
import Header from "./components/Header";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import Routes from "./components/Routes";
import Recipt from "./components/recipt";
import cartContext from "./components/CartContext";
import { AuthContext } from "./components/AuthContext";
function App() {
  const { currentUser } = useContext(AuthContext);
  const AuthRoute = ({ children }) => {
    return currentUser ? children : <Navigate to={"/login"} />;
  };

  const { items: productItems, setItems } = useData();

  console.log("array", productItems);

  const [cartItems, setCartItems] = useState([]);

  ////  Add to Products ////
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  ////////////// Remove Quantity

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App">
      <cartContext.Provider value={{ productItems, setProductItems: setItems }}>
        <Router>
          <Header cartItems={cartItems} />
          {/* <Header cartItems={cartItems} /> */}
          <Routes
            productItems={productItems}
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
          />
        </Router>
      </cartContext.Provider>
    </div>
  );
}
export default App;
