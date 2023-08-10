import React, { useEffect, useState } from "react";
function onFailureHelper(error, onFailure) {
  console.error(error);
  onFailure(error.message || "Something went wrong...");
}
export default function useProducts() {
  /**
   * Gets all products.
   */
  // function getProducts({ onSuccess, onFailure, skip = 0 }) {
  //   fetch(`https://dummyjson.com/products?skip=${skip}`)
  //     .then((res) => res.json())
  //     .then((data) => onSuccess(data))
  //     .catch((error) => onFailureHelper(error, onFailure));
  // }

  /**
   * Gets all product categories.
   */
  function getProductCategories({ onSuccess, onFailure }) {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => onSuccess(data))
      .catch((error) => onFailureHelper(error, onFailure));
  }
  /**
   * Gets products of a specific category.
   */
  function getProductByCategory(category, onSuccess, onFailure) {}
  return { getProductByCategory, getProductCategories };
}
