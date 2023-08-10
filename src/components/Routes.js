import React, { useContext } from "react";
import { Navigate, Route, Routes, Router } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";
import ExternalSearch from "./ExternalSearch";
import Recipt from "./recipt";
import InternalSearch from "./InternalSearch";
import External from "./External";
import Confirmorder from "./Confirmorder";
import Check from "./Check";
import SignUp from "./SignUp";
import Header from "./Header";
import Login from "./Login";
import { AuthContext } from "./AuthContext";
import Confirm from "./Confirm";

const Routess = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
}) => {
  const { currentUser } = useContext(AuthContext);
  const AuthRoute = ({ children }) => {
    return currentUser ? children : <Navigate to={"/login"} />;
  };
  return (
    <div>
      <Routes>
        <Route
          path="/externalSearch"
          element={
            <ExternalSearch
              productItems={productItems}
              handleAddProduct={handleAddProduct}
            />
          }
        ></Route>

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        ></Route>
        <Route
          path="/recipt"
          element={
            <Recipt
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        ></Route>

        <Route
          path="/internal"
          element={
            <InternalSearch
              cartItems={cartItems}
              productItems={productItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        ></Route>

        <Route
          path="/External"
          element={
            <External
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        ></Route>

        <Route
          path="/"
          element={
            <Confirmorder
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        ></Route>

        <Route
          path="/check"
          element={
            <Check
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        ></Route>

        <Route
          path="/signUp"
          element={
            <SignUp
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/confirm" element={<Confirm />}></Route>
      </Routes>
    </div>
  );
};

export default Routess;
